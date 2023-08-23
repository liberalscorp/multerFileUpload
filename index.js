const express = require('express');
const app = express();
const multer = require('multer');
const fileUpload = require('./routes/fileUpload.js');
const PORT = 3001;

app.use(express.json());

// path to upload files
app.use('/', fileUpload);


app.listen(PORT, () =>console.log(`Server running on: http://localhost:${PORT}`));