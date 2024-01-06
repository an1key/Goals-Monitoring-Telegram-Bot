const Goal = require('../models/goal');

class GoalService{
    static async createGoal(goalData){
        return await Goal.create(goalData);
    }

    static async getAllGoalsByUserId(userId){
        return await Goal.findAll({where: {UserId: userId}});
    }
}

module.exports = GoalService;