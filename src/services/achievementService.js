const Achievement = require('../models/achievement');

class AchievementService {
    static async createAchievement(achievementData) {
        return await Achievement.create(achievementData);
    }

    static async getAllAchievementsByUserId(userId) {
        return await Achievement.findAll({ where: { UserTelegramId: userId } });
    }
}

module.exports = AchievementService;