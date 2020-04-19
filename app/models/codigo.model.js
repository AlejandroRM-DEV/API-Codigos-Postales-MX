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
        type: Sequelize.STRING(35),
      },
      municipio: {
        type: Sequelize.STRING(50),
      },
      ciudad: {
        type: Sequelize.STRING(50),
      },
      asentamiento: {
        type: Sequelize.STRING(80),
      },
      tipo_asentamiento: {
        type: Sequelize.STRING(25),
      },
    },
    {
      timestamps: false,
    },
  );
  return CodigoPostal;
};
