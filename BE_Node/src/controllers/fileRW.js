const fs = require("fs");
const path = require("path");

exports.writeJSON = async (filePath, data) => {
    try {
        const dirPath = path.join(filePath, "..");
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        const stringData = JSON.stringify(data, null, 2);
        await fs.promises.writeFile(filePath, stringData, "utf8");
    } catch (err) {
        console.log(err);
    }
}

exports.readJSON = async (filePath) => {
    try {
        const stringData = await fs.promises.readFile(filePath, "utf8");
        const dataObject = JSON.parse(stringData);
        return dataObject;
    } catch (err) {
        console.log(err);
    }
}

exports.getDirectoryContent = async (dirPath) => {
    try {
        const files = await fs.promises.readdir(dirPath);
        return files;
    } catch (err) {
        console.log(err);
    }
}