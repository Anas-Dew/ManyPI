const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
    getAllFiles,
    getFile,
    putFile,
    deleteFile,
    replaceFile
} = require('../controllers/fileController');

router.get('/all', getAllFiles);
router.get('/:fileName', getFile);
router.post('/upload', upload.single('file'), putFile);
router.delete('/:fileName', deleteFile);
router.put('/:fileName', upload.single('file'), replaceFile);

module.exports = router;
