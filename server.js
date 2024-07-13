require('dotenv').config()
const express = require('express');
const storageRouter = require('./kv/storage');
const fileRoutes = require('./s3/src/routes/fileRoutes');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 7005;

const corsOptions = {
    origin: function (origin, callback) {
        let allowedDomains = process.env.ALLOWED_DOMAINS
        allowedDomains = allowedDomains.split(',');
        if (allowedDomains.length === 0) return callback(null, true); // allow all domains
        if (allowedDomains.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/kv', storageRouter); // Key-Value In-Memory Storage
app.use('/s3', fileRoutes); // Simple Storage API

app.listen(PORT, () => {
    console.log(`Many PI is running on PORT: ${PORT}`);
});