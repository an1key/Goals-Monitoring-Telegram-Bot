const {DataTypes} = require("sequelize");
const {sequelize} = require('../utils/database');
const User = require('./user');

const Goal = sequelize.define('Goal',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    isCountable:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    currentResult:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    finalResult:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    expireDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    notes:{
        type: DataTypes.STRING,
        defaultValue: " "
    }
}, {
    timestamps: false
})

Goal.belongsTo(User);
User.hasMany(Goal);

module.exports = Goal;