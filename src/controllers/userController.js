const User = require("../models/user");

class UserController {
    static async createUser(telegramId, name, msgId) {
        try {
            await User.create({telegramId, name, msgId});
            console.log(`New user created: ${name} (${telegramId})`);
        } catch (error) {
            console.error(`Error creating new user: ${error.message}`);
        }
    }
    static async grtUserByTelegramId(telegramId){
        try{

            const user = await User.findOne({where: {telegramId}});
            console.log(`Got user ${user.name}`);
            return user;
        }catch (error){
            console.error(`Error getting user: ${error.message}`);
        }
    }

}

module.exports = UserController;

