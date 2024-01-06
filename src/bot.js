const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const path = require("path");
const fs = require("fs");

// Initialize the Telegram bot
const bot = new TelegramBot(config.telegramToken, { polling: true });

// Function to initialize the bot and set up event listeners
function init() {

    const commandsDir = path.join(__dirname, './commands');
    const commandRegistry = [];

    // Dynamically load command handlers
    fs.readdirSync(commandsDir).forEach((file) => {
        const commandHandler = require(`${commandsDir}/${file}`);
        if (commandHandler.name && commandHandler.description && commandHandler.handler) {
            commandRegistry.push({
                name: commandHandler.name,
                description: commandHandler.description,
                handler: commandHandler.handler(bot)
            });
        }
    });
    bot.onText(/\/help/, (msg) => {
        const chatId = msg.chat.id;

        // Generate help information from the command registry
        const helpMessage = commandRegistry.map((command) => `/${command.name} – ${command.description}`).join('\n');
        bot.sendMessage(chatId, `Доступные команды:\n${helpMessage}`);
    });
    console.log('Bot is initializing...');



    // Add more event listeners as needed
    bot.on("polling_error", (err) =>{
        console.log(err);
    });
    console.log('Bot initialized.');
}

// Export the bot and init function
module.exports = {
    bot,
    init
};