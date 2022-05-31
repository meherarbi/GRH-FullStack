module.exports = (sequelize, Sequelize) => {
    const Candidat = sequelize.define("tutorial", {
      id: {
        type: Sequelize.STRING,
      },
      nom: {
        type: Sequelize.STRING,
      },
    });
  
    return Candidat;
  };
  


  /*

id c generer automatique donc exemple deformulaire fih champs wahed


 bech enti baad tu sais bien comment ajouter les champs de formulaires

 deja c copier coller juste renommer le nom de formulaire ou objet de formulaire OP_KILL_CURSORS
 
  */