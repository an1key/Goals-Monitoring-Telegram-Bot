const {Sequelize, Model, DataTypes} = require('Sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/userdata.sqlite'
});

const User = sequelize.define("user", {
    telegram_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Goals = sequelize.define("goals",{
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
    iscountable:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    curresult:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    finresult:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    expiredate:{
        type: DataTypes.DATE,
        allowNull: false
    }
})
User.hasMany(Goals);

console.log("success");