const express = require("express");
const filemulter = require("../middleware/file.js");
const uploadFile = require("../controllers/uploadFile.js");
const router = express.Router();


router.route("/")
    .post(filemulter.uploadFile, uploadFile.handleUploadFile)
    .get(uploadFile.handleGetFile)


module.exports = router;