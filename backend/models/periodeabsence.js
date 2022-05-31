module.exports = (sequelize, Sequelize) => {
    const periodeabsence = sequelize.define("tutorial", {
      id: {
        type: Sequelize.STRING,
      },
      duree: {
        type: Sequelize.INTEGER,
      },
      dateCreation: {
        type: Sequelize.DATE,
      },
      dateDebut: {
        type: Sequelize.DATE,
      },
      dateFin: {
        type: Sequelize.DATE,
      },
      titre: {
        type: Sequelize.STRING,
      },
      unite: {
        type: Sequelize.STRING,
      },
      createdby: {
        type: Sequelize.STRING,
      },
      updatedby: {
        type: Sequelize.STRING,
      },
     
    });
  
    return periodeabsence;
  };
  
