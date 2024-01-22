const Achievement = require("../models/achievement");


class AchievementController {
    static async createAchievement(achievementData) {
        try {
            await Achievement.create(achievementData);
            console.log(`New achievement created: ${achievementData.content}`);
        } catch (error) {
            console.error(`Error creating new achievement: ${error.message}`);
        }
    }

    static async getAllAchievementsByUserId(userId){
        try{
            const achievements = await Achievement.findAll({where:{UserTelegramId: userId}});
            console.log(`Founded ${achievements.length} achievements from user ${userId}`);
            return achievements;
        }catch(error){
            console.error(`Error getting achievements: ${error.message}`)
        }
    }
}

module.exports = AchievementController;