const {testDatabaseConnection, syncDatabase} = require('./utils/database')
const {bot, init} = require('./bot');


testDatabaseConnection()
    .then(() => {
        syncDatabase();

        init();




    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

