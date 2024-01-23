const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

const keyboards = require("./inlines/keyboards");
const userController = require('./controllers/userController')
const goalController = require('./controllers/goalController')
const achievementController = require('./controllers/achievementController')
// Initialize the Telegram bot
const bot = new TelegramBot(config.telegramToken, { polling: true });

// Function to initialize the bot and set up event listeners
function init() {

    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        const userName = msg.chat.first_name;
//        console.log(msg)
        // Respond with a welcome message
        bot.sendMessage(chatId, `Привет, ${userName}! Добро пожаловать в бота для управления целями и достижениями.`, {
            reply_markup: JSON.stringify(keyboards.start)
        })
            .then((sentMessage) => {
//                console.log(sentMessage)
                const msg_id = sentMessage.message_id
//                console.log(msg_id)
                const user = userController.getUserByTelegramId(chatId);
                if (!user){
                    userController.createUser(chatId, userName, msg_id);
                }
                else{
                    userController.modifyUser(chatId, {msg_id: msg_id})
                }
            });
    })

    bot.onText(/\/помогите?/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, `Пользуйтесь клавиатурой. Интуитивно понятный интерфейс ;)\n
Если потеряли основное сообщение, воспользуйтесь снова командой /start`);
    });

    console.log('Bot is initializing...');

     bot.on('callback_query', async (query) => {

        const user = await userController.getUserByTelegramId(query.from.id)
        switch (query.data) {
            case 'view_all_goals':
                try{
                    console.log(user.telegramId)
                    const goals = await goalController.getAllGoalsByUserId(user.telegramId)
                    if (!goals) {
                        await bot.editMessageText('У вас пока нет целей', {
                            chat_id: user.telegramId,
                            message_id: user.msg_id
                        })
                        await bot.editMessageReplyMarkup(JSON.stringify(keyboards.go_home), {
                            chat_id: user.telegramId,
                            message_id: user.msg_id
                        })
                    } else {
                        var keyboard_content = goals.map((goal) => {
                            console.log(goal.dataValues)
                            return [{
                                    text: `${goal.dataValues.name} | Результат: ${goal.dataValues.currentResult}/${goal.dataValues.finalResult} до ${goal.dataValues.expireDate}`,
                                    callback_data: `goal_${goal.dataValues.id}`
                                }]

                        })
                        keyboard_content.push([{text: 'Вернуться в меню', callback_data: 'go_home'}])
                        const keyboard = {inline_keyboard:keyboard_content};
                        console.log(JSON.stringify(keyboard))
                        await bot.editMessageText('Ваши цели:', {chat_id: user.telegramId, message_id: user.msg_id})
                        await bot.editMessageReplyMarkup(JSON.stringify(keyboard), {
                            chat_id: user.telegramId,
                            message_id: user.msg_id
                        })
                    }
                }catch(err){
                    console.error(err.message)
                }

                break
            case 'achievements':
                break
            case 'add_new_goal':
                break
            case 'go_home':
                await bot.editMessageText(`Привет, ${user.name}! Добро пожаловать в бота для управления целями и достижениями.`,
                    {chat_id: user.telegramId, message_id: user.msg_id})
                await bot.editMessageReplyMarkup(JSON.stringify(keyboards.start), {chat_id: user.telegramId, message_id: user.msg_id})
                break

        }

    })

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