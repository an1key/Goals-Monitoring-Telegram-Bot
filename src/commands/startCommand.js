module.exports = {
    name: 'start',
    description: 'Начало использования бота',
    handler: (bot) => {
        bot.onText(/\/start/, (msg) => {
            const chatId = msg.chat.id;
            const userId = msg.from.id;

            // Define the initial keyboard with "Цели" and "Достижения"
            const initialKeyboard = {
                inline_keyboard: [
                    [{ text: 'Цели', callback_data: 'view_goals' }],
                    [{ text: 'Достижения', callback_data: 'view_achievements' }],
                ],
            };

            // Send the welcome message with the initial inline keyboard
            bot.sendMessage(chatId, 'Выберите раздел:', {
                reply_markup: JSON.stringify(initialKeyboard),
            });
        });
    },
};