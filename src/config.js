const path = require('path');
const config = require('../data/config.json');


module.exports = {
    telegramToken: config.api_token,
    databasePath: path.join(__dirname, '../data/userdata.sqlite')
}