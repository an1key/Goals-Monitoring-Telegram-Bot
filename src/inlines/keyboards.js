module.exports = {
    start: {
        inline_keyboard:[
            [
                {
                    text: "Посмотреть все свои цели",
                    callback_data: 'view_all_goals'
                }],
            [
                {
                    text: "Добавить цель",
                    callback_data: 'add_new_goal'
                }],
            [
                {
                    text: "Достижения",
                    callback_data: 'achievements'
                }]
        ]
    },
    achievements: {
        inline_keyboard:[
            [{
                text: "Все достижения",
                callback_data: 'view_all_achievements'
            }],
            [{
                text: "Добавить достижение",
                callback_data: 'add_new_achievement'
            }]
        ]
    },

    go_home: {
        inline_keyboard:[
            [{
                text: "Вернуться в главное меню",
                callback_data: 'go_home'
            }]
        ]
    }
}