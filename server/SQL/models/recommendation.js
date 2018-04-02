module.exports = (sequelize, DataTypes) => {
  const Recommendation = sequelize.define('Recommendation', {
    name: DataTypes.STRING,
    location: DataTypes.TEXT,
    price: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: (models) => {
        Recommendation.belongsTo(models.User);
      },
    },
  });
  return Recommendation;
};
