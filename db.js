const { Sequelize , DataTypes } = require('sequelize')
const db = new Sequelize('taskappdb' , 'root' , 'deepu' , {
    host: 'localhost',
    dialect: 'mysql'
})
const Tasks = db.define('task' , {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: false
    },
    task: {
        type: DataTypes.STRING(120),
        allowNull: false
    }
})

module.exports = {
    db,
    Tasks
}