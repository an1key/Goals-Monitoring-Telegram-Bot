const {Sequelize, Model, DataTypes} = require('Sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/userdata.sqlite',
    define: {
        timestamps: false
    }
});

const User = sequelize.define('User', {
    telegram_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Goals = sequelize.define('Goals',{
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
    },
    notes:{
        type: DataTypes.STRING,
        defaultValue: " "
    }
})

const Achievements = sequelize.define('Achievements', {
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
        allowNull: false
    }
})


User.hasMany(Goals);
User.hasMany(Achievements);

sequelize.sync().then((res) => {console.log(res)})

