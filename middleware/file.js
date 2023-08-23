const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploadedImage"));
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null,Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

exports.uploadFile = upload.single('file');