const Goal = require("../models/goal");

class GoalController {
    static async createGoal(goalData) {
        try {
            await Goal.create(goalData);
            console.log(`New goal created: ${goalData.name}`);
        } catch (error) {
            console.error(`Error creating new goal: ${error.message}`);
        }
    }
    static async getAllGoalsByUserId(userId){
        try{
            const {count, goals} = await Goal.findAndCountAll({where:{UserTelegramId: userId}});
            console.log(`Got ${goals.length} goals from user ${userId}`);
            return {count, goals};
        }catch(error){
            console.error(`Error getting goals: ${error.message}`)
        }
    }

    static async modifyGoalByGoalId(goalId, newData){
        try{
            const goal = await Goal.findOne({where: {id: goalId}})
            await goal.update(newData);
            console.log(`Succesfully updated goal with id ${goalId}`)

        }catch(error){
            console.error(`Error updating goal: ${error.message}`)
        }

    }
}

module.exports = GoalController;
