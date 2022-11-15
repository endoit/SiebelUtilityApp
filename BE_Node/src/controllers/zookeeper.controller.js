const zookeeper = require("node-zookeeper-client");
const constants = require("./constants.js");
const fileRW = require("./fileRW.js");
const profiles = require(constants.PROFILE_CONFIG_PATH);
const snapshotsDir = constants.SNAPSHOTS_FOLDER;

//promise wrapper for zookeeper connect
const connectAsync = (client) => new Promise((resolve, reject) => {
  client.once("connected", () => resolve());
  client.once("connectedReadOnly", () => resolve());
  client.once("authenticationFailed", () => reject());
  client.once("disconnected", () => reject());
  client.once("expired", () => reject());
  client.connect();
});

//promise wrapper for zookeeper close
const closeAsync = (client) => new Promise((resolve, reject) => {
  if (client?.getState?.() === zookeeper.State.DISCONNECTED) {
    resolve();
  }
  client?.once?.("disconnected", () => resolve());
  client?.close?.();
});

//connects to zookeeper
const createZKClient = async (name) => {
  try {
    const { host, username, password } = profiles[name].zookeeper;
    const client = zookeeper.createClient(host);
    const zkAuth = new Buffer.from(`${username}:${password}`, "utf8");
    client.addAuthInfo("digest", zkAuth);
    await connectAsync(client);
    return client;
  } catch (err) {
    console.log(err)
  }
}

//get routes for different resouruce
const getParamRoute = (param) => param ? "/" + param : "";
const getNSSRoute = (nss, param) => `/${nss}/parameters${param ? "/" + param : ""}`;
const getCompRoute = (compgroup, comp, param) => `/${compgroup}${comp ? "/components/" + comp + `${param ? "/parameters/" + param : "/parameters"}` : "/components"}`;
const getEventLogRoute = (compgroup, comp, param) => `/${compgroup}${comp ? "/components/" + comp + `${param ? "/events/" + param + "/handlers/eventlog" : "/events"}` : "/components"}`;

const routes = {
  entParam: { end: "parameters", getRoute: getParamRoute },
  serParam: { end: "parameters", getRoute: getParamRoute },
  entComp: { end: "component groups", getRoute: getCompRoute },
  serComp: { end: "component groups", getRoute: getCompRoute },
  nss: { end: "named subsystems", getRoute: getNSSRoute },
  eventlog: { end: "component groups", getRoute: getEventLogRoute },
};

//gets all the children for a route
const getChildren = async (client, baseRoute, resource = "") => {
  const route = `${baseRoute}${resource}`;
  try {
    const children = new Promise((resolve, reject) => {
      client.getChildren(route, (err, children, stat) => {
        if (err) {
          resolve([]);
        }
        resolve(children);
      })
    })
    return children;
  } catch (err) {
    console.log(err.toString());
  }
}

//parses the node value string and returns it as an object
const parseZKString = (dataStr) => {
  try {
    const data = dataStr.toString().trim("\n").split("\n");
    const nodeObject = {};
    for (let keyval of data) {
      let item = keyval.split("=");
      nodeObject[item[0]] = item[1].replaceAll("\"", "");
    }
    return nodeObject;
  } catch (err) {
    return { Error: err.toString() };
  }
}

//gets the node values as objects
const getNodeValue = async (client, baseRoute, resource = "") => {
  const route = `${baseRoute}${resource}`;
  return new Promise((resolve, reject) => {
    client.getData(route, (err, data) => {
      if (err) {
        resolve({ Error: err.toString() });
        return;
      }
      const nodeObject = parseZKString(data);
      resolve(nodeObject);
    });
  });
}

//gets back all values for the specified route as an object
const getParameters = async (client, route, type) => {
  const nodes = await getChildren(client, route);
  const { getRoute } = routes[type];
  const parameterObject = {};
  switch (routes[type].getRoute.name) {
    case "getParamRoute": {
      for (let param of nodes) {
        let nodeValue = await getNodeValue(client, route, getRoute(param));
        parameterObject[param] = nodeValue.Value;
      }
      break;
    }
    case "getNSSRoute": {
      for (let nss of nodes) {
        let params = await getChildren(client, route, getRoute(nss));
        parameterObject[nss] = {};
        for (let param of params) {
          let nodeValue = await getNodeValue(client, route, getRoute(nss, param));
          parameterObject[nss][param] = nodeValue.Value;
        }
      }
      break;
    }
    case "getCompRoute": {
      for (let comgroup of nodes) {
        let comps = await getChildren(client, route, getRoute(comgroup));
        for (let comp of comps) {
          let params = await getChildren(client, route, getRoute(comgroup, comp));
          parameterObject[comp] = {};
          for (let param of params) {
            let nodeValue = await getNodeValue(client, route, getRoute(comgroup, comp, param));
            parameterObject[comp][param] = nodeValue.Value;
          }
        }
      }
      break;
    }
    case "getEventLogRoute": {
      for (let comgroup of nodes) {
        let comps = await getChildren(client, route, getRoute(comgroup));
        for (let comp of comps) {
          let events = await getChildren(client, route, getRoute(comgroup, comp));
          parameterObject[comp] = {};
          for (let event of events) {
            let nodeValue = await getNodeValue(client, route, getRoute(comgroup, comp, event));
            parameterObject[comp][event] = nodeValue.Value;
          }
          if (!Object.keys(parameterObject[comp])[0]) delete parameterObject[comp];
        }
      }
      break;
    }
  }
  return parameterObject;
}

//get all parameters for given resource
const getResource = async (client, type, enterprise) => {
  try {
    let isServer = ["serParam", "serComp", "eventlog"].includes(type);
    let route = `/enterprises/${enterprise}/servers`.toLowerCase();
    let zkData = {};
    const servers = await getChildren(client, route);
    if (isServer) {
      for (let server of servers) {
        route = `/enterprises/${enterprise}/servers/${server}/${routes[type].end}`.toLowerCase();
        const compParams = await getParameters(client, route, type);
        //for server components, add the parameters from the enterprise component definitons if they are not already in the component
        if (type === "serComp") {
          isServer = false;
          type = "entComp";
          route = `/enterprises/${enterprise}/${routes[type].end}`.toLowerCase();
          const allParams = await getParameters(client, route, type);
          for (let [comp, params] of Object.entries(allParams)) {
            if (!compParams.hasOwnProperty(comp)) continue;
            for (let [param, value] of Object.entries(params)) {
              if (compParams[comp].hasOwnProperty(param)) continue;
              compParams[comp][param] = value;
            }
          }
        }
        zkData[server] = compParams;
      }
      isServer = true;
    } else {
      route = `/enterprises/${enterprise}/${routes[type].end}`.toLowerCase();
      zkData = await getParameters(client, route, type);
    }
    return zkData;
  } catch (err) {
    return { Error: err.toString() }
  }
}

//type possible values: ["entParam", "serParam", "entComp", "serComp", "nss", "eventlog", "snapshot"]
//sends all parameters for a resource type as an object or save the whole enterprise as a snapshot
exports.getData = async (req, res) => {
  let client;
  try {
    const { type, name } = req.params;
    const { enterprise } = profiles[name];
    client = await createZKClient(name);
    if (type === "snapshot") {
      const snapshot = {};
      const resources = ["entParam", "entComp", "nss", "serParam", "serComp"];
      for (let rsc of resources) {
        snapshot[rsc] = await getResource(client, rsc, enterprise);
      }
      const timestamp = new Date().toISOString().substring(0, 19).replaceAll(":", "-");
      const fileName = `${enterprise}_${timestamp}.json`;
      const filePath = `${snapshotsDir}\\${fileName}`;
      await fileRW.writeJSON(filePath, snapshot);
      res.send(`Snapshot saved: ${fileName}`);
      return;
    }
    zkData = await getResource(client, type, enterprise);
    res.send(zkData);
    return;
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: err.toString()
    })
  } finally {
    await closeAsync(client);
  }
}


