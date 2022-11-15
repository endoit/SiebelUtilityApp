const { spawn } = require("child_process");
const constants = require("./constants.js");
const profiles = require(constants.PROFILE_CONFIG_PATH);

//executes a command using the Siebel server manager
exports.executeCommand = async (req, res) => {
  res.send("Contact us for full version!");
}