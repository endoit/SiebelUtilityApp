module.exports = (app) => {
  const profiles = require("../controllers/profiles.controller.js");
  const router = require("express").Router();

  router.post("/", profiles.create);
  router.get("/", profiles.findAll);
  router.delete("/:name", profiles.delete);

  app.use("/api/profiles", router);
}
