const User = require("../models/user");
const Goal = require("../models/goal");

class UserController {
    static async createUser(telegramId, name, msgId) {
        try {
            await User.create({telegramId: telegramId, name: name, msg_id: msgId});
            console.log(`New user created: ${name} (${telegramId})`);
        } catch (error) {
            console.error(`Error creating new user: ${error.message}`);
        }
    }

    static async modifyUser(userId, newData){
        try{
            const user = await User.findOne({where: {telegramId: userId}})
            await user.update(newData);
            console.log(`Succesfully updated user with id ${userId}`)

        }catch(error){
            console.error(`Error updating user: ${error.message}`)
        }
    }
    static async getUserByTelegramId(telegramId){
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

