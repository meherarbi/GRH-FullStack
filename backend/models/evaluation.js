module.exports = (sequelize, Sequelize) => {
    const evaluation = sequelize.define("tutorial", {
      id: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      criteres: {
        type: Sequelize.STRING,
      },
      relationnel: {
        type: Sequelize.STRING,
      },
      technique: {
        type: Sequelize.STRING,
      },
      createdby: {
        type: Sequelize.STRING,
      },
      updatedby: {
        type: Sequelize.STRING,
      },
     
    });
  
    return evaluation;
  };
  