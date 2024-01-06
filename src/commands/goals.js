
const GoalService = require("../services/goalService");
module.exports = {
    name: 'g',
    description: 'Просмотр списка всех своих целей',
    handler: (bot) => {
        bot.onText(/\/g/, async (msg) => {
            const chatId = msg.chat.id;
            const userId = msg.from.id;

            try {
                // Retrieve user's goals from the database
                const goals = await GoalService.getAllGoalsByUserId(userId);

                if (goals.length === 0) {
                    bot.sendMessage(chatId, 'У вас пока нет целей.');
                } else {
                    // Format and send the goals list
                    const goalsList = goals.map((goal) => `- ${goal.name}`).join('\n');
                    const response = `Ваши цели:\n${goalsList}`;
                    bot.sendMessage(chatId, response);
                }
            } catch (error) {
                console.error('Error retrieving goals:', error);
                bot.sendMessage(chatId, 'Произошла ошибка при получении ваших целей.');
            }
        });

    },
};