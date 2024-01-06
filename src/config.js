const path = require('path');
const config = require('../data/config.json');
const dbPath = path.join(__dirname, '../data/userdata.sqlite')

module.exports = {
    telegramToken: config.api_token,
    databasePath: dbPath
}