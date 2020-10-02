const resume = (connection, Sequelize) => {
    return connection.define('resume', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: Sequelize.STRING },
      company: { type: Sequelize.STRING },
      summary: { type: Sequelize.STRING },
    }, { paranoid: true })
  }
  
  module.exports = resume

  /* I believe that having the word 'id' in my dataset
  conflicts with the mysql keyword 'id'. I sure hope not.
  */