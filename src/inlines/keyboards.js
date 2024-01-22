module.exports = {
    start: {
        inline_keyboard:[
            [{
                text: "Цели",
                callback_data: 'goals'
            },
            {
                text: "Достижения",
                callback_data: 'achievements'
            }]

        ]
    },
    goals: {
        inline_keyboard:[
            [{
                text: "Посмотреть все цели",
                callback_data: 'view_all_goals'
            }],
            [{
                text: "Добавить новую цель",
                callback_data: 'add_new_goal'
            }]
        ]
    }
}