module.exports = (sequelize, Sequelize) => {
  const CodigoPostal = sequelize.define(
    'codigos_postales',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      codigo_postal: {
        type: Sequelize.STRING(5),
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
    },
  );
  return CodigoPostal;
};
