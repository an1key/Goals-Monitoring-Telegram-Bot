const UserService = require('../services/userService');

class UserController {
    static async handleNewUser(telegramId, name) {
        try {
            await UserService.createUser(telegramId, name);
            console.log(`New user created: ${name} (${telegramId})`);
        } catch (error) {
            console.error(`Error creating new user: ${error.message}`);
        }
    }
}

module.exports = UserController;