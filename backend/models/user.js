module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("tutorial", {
      id: {
        type: Sequelize.STRING,
      },
      nom: {
        type: Sequelize.STRING,
      },
    });
  
    return user;
  };
  