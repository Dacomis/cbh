const crypto = require('crypto');

const hash = (value) => crypto.createHash('sha3-512').update(value).digest('hex');
const toString = (value) => JSON.stringify(value);

module.exports = { hash, toString };