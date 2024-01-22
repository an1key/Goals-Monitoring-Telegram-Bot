const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database.js');

const User = sequelize.define('User', {
    telegramId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    msg_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = User;