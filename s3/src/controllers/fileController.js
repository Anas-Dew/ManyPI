const fs = require('fs');
const path = require('path');

const getAllFiles = (req, res) => {
    fs.readdir('s3/uploads', (err, files) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(files);
    });
};

const getFile = (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('s3/uploads', fileName);

    if (fs.existsSync(filePath)) {
        res.sendFile(path.resolve(filePath));
    } else {
        res.status(404).json({ error: 'File not found' });
    }
};

const putFile = (req, res) => {
    res.status(201).json({ message: 'File uploaded successfully', fileName: req.file.filename });
};

const deleteFile = (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('s3/uploads', fileName);

    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'File deleted successfully' });
        });
    } else {
        res.status(404).json({ error: 'File not found' });
    }
};

const replaceFile = (req, res) => {
    const oldFileName = req.params.fileName;
    const oldFilePath = path.join('s3/uploads', oldFileName);

    if (fs.existsSync(oldFilePath)) {
        fs.unlink(oldFilePath, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ message: 'File replaced successfully', fileName: req.file.filename });
        });
    } else {
        res.status(404).json({ error: 'File not found' });
    }
};

module.exports = {
    getAllFiles,
    getFile,
    putFile,
    deleteFile,
    replaceFile
};
