const { v4: uuidv4 } = require('uuid');

const generateFileName = () => {
    const uuid = uuidv4().replace(/-/g, '');
    return uuid.match(/.{1,4}/g).join('-');
};

module.exports = generateFileName;
