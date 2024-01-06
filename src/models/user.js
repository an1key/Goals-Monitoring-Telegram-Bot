const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database.js');

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
    }
})

module.exports = User;