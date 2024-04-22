module.exports = (sequelize, Sequelize) => {
  const Property = sequelize.define("Property", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: true },
    price: { type: Sequelize.INTEGER, allowNull: false },
    address: { type: Sequelize.STRING, allowNull: false },
    city: { type: Sequelize.STRING, allowNull: false },
    state: { type: Sequelize.STRING, allowNull: false },
    zip: { type: Sequelize.STRING, allowNull: false },
    type: { type: Sequelize.STRING, allowNull: false },
    bedrooms: { type: Sequelize.INTEGER, allowNull: false },
    bathrooms: { type: Sequelize.INTEGER, allowNull: false },
    sqft: { type: Sequelize.INTEGER, allowNull: true },
    yearBuilt: { type: Sequelize.INTEGER, allowNull: true },
    photo: { type: Sequelize.STRING, allowNull: true },
  });

  return Property;
};
