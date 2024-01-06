const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');
const User = require('./user');

const Achievement = sequelize.define('Achievement', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
},{
    timestamps: false
});

Achievement.belongsTo(User);
User.hasMany(Achievement);

module.exports = Achievement;