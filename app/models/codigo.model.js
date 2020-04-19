module.exports = (sequelize, Sequelize) => {
  const Codigo = sequelize.define(
    "codigo",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      codigo: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.STRING,
      },
      municipio: {
        type: Sequelize.STRING,
      },
      ciudad: {
        type: Sequelize.STRING,
      },
      asentamiento: {
        type: Sequelize.STRING,
      },
      tipo_asentamiento: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Codigo;
};
