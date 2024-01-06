const GoalController = require("../controllers/goalController");
module.exports = {
    name: 'ng',
    description: 'Добавление новой цели',
    handler: (bot) => {
        bot.onText(/\/ng/, (msg) => {
            const chatId = msg.chat.id;
            const userId = msg.from.id;

            // Логика создания новой цели...
            const goalData = {
                name: 'Новая цель',
                isCountable: true,
                currentResult: 0,
                finalResult: 10,
                expireDate: new Date('2024-12-31'),
                notes: 'Заметки по цели',
                UserTelegramId: userId,
            };

            GoalController.handleNewGoal(goalData);

            // Отправка сообщения об успешном создании цели
            bot.sendMessage(chatId, 'Новая цель успешно создана!');
        });
    }
};