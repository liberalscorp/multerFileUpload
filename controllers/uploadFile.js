
const path = require("path");

exports.handleGetFile = (req, res) => {
    res.sendFile(path.join(__dirname, "../view/upload.html"));
};

exports.handleUploadFile = (req, res) => {
    console.log(req.file);
    if (req.file == undefined) {
        return res.send(`You must select a file.`);
    }else{
        res.send("File uploaded successfully");
    }
};
