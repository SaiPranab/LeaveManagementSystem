const Sequelize = require('sequelize')

const sequelize = new Sequelize('lms', 'root', 'tiger', {
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = sequelize; 