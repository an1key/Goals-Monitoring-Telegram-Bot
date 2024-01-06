const {Sequelize} = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: config.databasePath,
    logging: false
})

async function testDatabaseConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function syncDatabase(){
    try {
        await sequelize.sync();
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing the database:', error);
    }
}

module.exports = sequelize;

if (require.main === module) {
    testDatabaseConnection();
    syncDatabase();
}