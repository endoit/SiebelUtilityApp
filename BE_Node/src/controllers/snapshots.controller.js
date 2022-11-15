const constants = require("./constants.js");
const fileRW = require("./fileRW.js");
const snapshotsDir = constants.SNAPSHOTS_FOLDER;

//get the list of snapshots
exports.getSnapshotList = async (req, res) => {
    try {
        const snapshotList = await fileRW.getDirectoryContent(snapshotsDir);
        res.send(snapshotList);
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: err.toString()
        })
    }
}