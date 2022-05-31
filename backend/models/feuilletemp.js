module.exports = (sequelize, Sequelize) => {
    const feuilletemp = sequelize.define("tutorial", {
      id: {
        type: Sequelize.STRING,
      },
      nom: {
        type: Sequelize.STRING,
      },
      jours: {
        type: Sequelize.STRING,
      },
      etat: {
        type: Sequelize.STRING,
      },
      commentaire: {
        type: Sequelize.STRING,
      },
      fermer: {
        type: Sequelize.STRING,
      },
      createdby: {
        type: Sequelize.STRING,
      },
      updatedby: {
        type: Sequelize.STRING,
      },
     
    });
  
    return feuilletemp ;
  };
  