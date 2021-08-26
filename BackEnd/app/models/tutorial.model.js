module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    color: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    unitsAvailable: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
