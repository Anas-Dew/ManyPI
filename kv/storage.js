const express = require('express');
const router = express.Router();
const cron = require('node-cron');

// In-memory storage object
const storage = {};

// Helper function to check if a key exists
const keyExists = (key) => storage.hasOwnProperty(key);

// Route to set a key-value pair
router.post('/set', (req, res) => {
    const { key, value } = req.body;
    if (keyExists(key)) {
        return res.status(400).json({ message: 'Key already exists' });
    }
    storage[key] = value;
    res.status(200).json({ message: 'Key-value pair set successfully' });
});

// Route to get a value by key
router.get('/get/:key', (req, res) => {
    const key = req.params.key;
    if (!keyExists(key)) {
        return res.status(404).json({ message: 'Key not found' });
    }
    res.status(200).json({ value: storage[key] });
});

// Route to delete a key
router.delete('/delete/:key', (req, res) => {
    const key = req.params.key;
    if (!keyExists(key)) {
        return res.status(404).json({ message: 'Key not found' });
    }
    delete storage[key];
    res.status(200).json({ message: 'Key deleted successfully' });
});

// Route to replace a value by key
router.put('/replace/:key', (req, res) => {
    const key = req.params.key;
    const { value } = req.body;
    if (!keyExists(key)) {
        return res.status(404).json({ message: 'Key not found' });
    }
    storage[key] = value;
    res.status(200).json({ message: 'Value replaced successfully' });
});

// Route to delete all key-value pairs
router.delete('/thanos', (req, res) => {
    Object.keys(storage).forEach((key) => delete storage[key]);
    res.status(200).json({ message: 'All keys deleted successfully' });
});

cron.schedule('0 */4 * * *', () => {
    console.info('Job Start: KV refresh');
    Object.keys(storage).forEach((key) => delete storage[key]);
    console.log('Job Complete: KV refresh');
});

module.exports = router;
