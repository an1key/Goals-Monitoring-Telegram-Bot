const AchievementService = require('../services/achievementService');

class AchievementController {
    static async handleNewAchievement(achievementData) {
        try {
            await AchievementService.createAchievement(achievementData);
            console.log(`New achievement created: ${achievementData.content}`);
        } catch (error) {
            console.error(`Error creating new achievement: ${error.message}`);
        }
    }
}

module.exports = AchievementController;