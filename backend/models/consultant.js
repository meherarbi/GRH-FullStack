module.exports = (sequelize, Sequelize) => {
  const Consultant = sequelize.define("tutorial", {
    id: {
      type: Sequelize.STRING,
    },
    nom: {
      type: Sequelize.STRING,
    },
  });

  return Consultant;
};
