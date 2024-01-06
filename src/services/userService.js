const User = require('../models/user')

class UserService{
    static async createUser(telegramId, name){
        return await User.create({telegramId, name});
    }

    static async getUserByTelegramId(telegramId){
        return await User.findOne({where: {telegramId}});
    }
}

module.exports = UserService;