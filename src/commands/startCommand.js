const keyboards = require('../inlines/keyboards')
const {createUser} = require('../controllers/userController')
module.exports = {
    name: 'start',
    description: 'Начало использования бота',
    handler: (bot) => {
        bot.onText(/\/start/, (msg) => {
            const chatId = msg.chat.id;
            const userName = msg.from.first_name;

            // Respond with a welcome message
            bot.sendMessage(chatId, `Привет, ${userName}! Добро пожаловать в бота для управления целями и достижениями.`, {
                reply_markup: JSON.stringify(keyboards.main),
            })
                .then((sentMessage) => {
                    this.messageId = sentMessage.message_id;
                });

        });
    },
    messageId: this.messageId
};