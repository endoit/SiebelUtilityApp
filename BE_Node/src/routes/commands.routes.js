module.exports = (app) => {
  const router = require("express").Router();
  const commands = require("../controllers/commands.controller.js");

  router.post("/:command/:name", commands.executeCommand);
  
  app.use("/api/commands", router);
}