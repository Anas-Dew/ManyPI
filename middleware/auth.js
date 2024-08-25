require('dotenv').config()
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === process.env.SECRET_KEY) {
        next();
    } else {
        res.sendStatus(401);
    }
};

module.exports = authMiddleware;