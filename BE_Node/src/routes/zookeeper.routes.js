module.exports = (app) => {
  const zookeeper = require("../controllers/zookeeper.controller.js");
  const router = require("express").Router();

  router.get("/:type/:name", zookeeper.getData);
  
  app.use("/api/zookeeper", router);
}