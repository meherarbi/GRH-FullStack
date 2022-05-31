module.exports = (sequelize, Sequelize) => {
    const information = sequelize.define("tutorial", {
      nom: {
        type: Sequelize.STRING,
      },
      prenom: {
        type: Sequelize.STRING,
      },
      civilite: {
        type: Sequelize.STRING,
      },
      evaluation: {
        type: Sequelize.STRING,
      },
     
     
    });
  
    return information ;
  };
  