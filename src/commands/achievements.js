
const AchievementService = require("../services/achievementService");
module.exports = {
    name: 'a',
    description: 'Просмотр всех своих достижений',
    handler: (bot) => {
        bot.onText(/\/a/, async (msg) => {
            const chatId = msg.chat.id;
            const userId = msg.from.id;

            try {
                // Retrieve user's achievements from the database
                const achievements = await AchievementService.getAllAchievementsByUserId(userId);

                if (achievements.length === 0) {
                    bot.sendMessage(chatId, 'У вас пока нет достижений.');
                } else {
                    // Format and send the achievements list
                    const achievementsList = achievements.map((achievement) => `- ${achievement.content}`).join('\n');
                    const response = `Ваши достижения:\n${achievementsList}`;
                    bot.sendMessage(chatId, response);
                }
            } catch (error) {
                console.error('Error retrieving achievements:', error);
                bot.sendMessage(chatId, 'Произошла ошибка при получении ваших достижений.');
            }
        });

    },
};