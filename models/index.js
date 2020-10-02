const Sequelize = require('sequelize')
const resumeModel = require('./resume')

const connection = new Sequelize('katresume', 'katresume', 're$ume', {
  host: 'localhost', dialect: 'mysql'
})

const resume = resumeModel(connection, Sequelize)

module.exports = { resume }
