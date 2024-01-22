const {testDatabaseConnection, syncDatabase} = require('./utils/database')
const {bot, init} = require('./bot');


testDatabaseConnection()
    .then(() => {
        syncDatabase();

        init();

        bot.on('callback_query', (query) => {
            console.log(query)
        })


    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

