module.exports = (app) => {
  const snapshots = require("../controllers/snapshots.controller.js");
  const router = require("express").Router();

  router.get("/snapshotlist", snapshots.getSnapshotList);
  
  app.use("/api/snapshots", router);
}