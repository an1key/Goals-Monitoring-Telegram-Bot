const Goal = require('../models/goal');

class GoalService{
    static async createGoal(goalData){
        return await Goal.create(goalData);
    }

    static async getAllGoalsByUserId(userId){
        console.log(userId)
        return await Goal.findAll({where: {UserTelegramId: userId}});
    }
}

module.exports = GoalService;