const fileRW = require("./fileRW.js");
const constants = require("./constants.js");
const profiles = require(constants.PROFILE_CONFIG_PATH);

exports.create = async (req, res) => {
  const { name, ...profileParams } = req.body;
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    })
    return;
  };

  try {
    profiles[name] = profileParams;
    await fileRW.writeJSON(constants.PROFILE_CONFIG_PATH, profiles);
    res.send(req.body);
  } catch (err) {
    res.status(500).send({
      message:
        err.toString() || "Some error occurred while creating the profile."
    });
  }
}

exports.findAll = async (req, res) => {
  try {
    res.send(profiles);
  } catch (err) {
    res.status(500).send({
      message:
        err.toString() || "Some error occurred while retrieving profiles."
    });
  }
}

exports.delete = async (req, res) => {
  const name = req.params.name;
  try {
    if (!profiles.hasOwnProperty(name)) throw ("because it does not exist");
    delete profiles[name];
    await fileRW.writeJSON(constants.PROFILE_CONFIG_PATH, profiles);
    res.send(`${name} profile was deleted!`);
  } catch (err) {
    res.status(500).send({
      message: `Could not delete profile with name ${name}, ${err.toString()}`
    });
  }
}