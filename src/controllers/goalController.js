const GoalService = require('../services/goalService');

class GoalController {
    static async handleNewGoal(goalData) {
        try {
            await GoalService.createGoal(goalData);
            console.log(`New goal created: ${goalData.name}`);
        } catch (error) {
            console.error(`Error creating new goal: ${error.message}`);
        }
    }
}

module.exports = GoalController;