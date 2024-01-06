const AchievementController = require("../controllers/achievementController");

module.exports = {
    name: 'na',
    description: 'Добавление нового достижения',
    handler: (bot) => {
        bot.onText(/\/na/, (msg) => {
            const chatId = msg.chat.id;
            const userId = msg.from.id;


            const achievementData = {
                content: 'Новое достижение',
                UserTelegramId: userId,
            };

            AchievementController.handleNewAchievement(achievementData);

            bot.sendMessage(chatId, 'Новое достижение успешно создано!');
        })
    }
};
/*
module.exports = {
    name: 'start',
    description: 'Начало использования бота',
    handler: (bot) => {


    },
};

 */