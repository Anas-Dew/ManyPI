const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 's3/uploads/');
    },
    filename: function (req, file, cb) {
        const generateFileName = require('../utils/generateFileName');
        const ext = path.extname(file.originalname);
        cb(null, `${generateFileName()}${ext}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
