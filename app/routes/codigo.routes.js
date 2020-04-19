const router = require('express').Router();
const codigos = require('../controllers/codigo.controller.js');

module.exports = (app) => {
  router.get('/codigos-postales', codigos.todos);
  router.get('/codigos-postales/:cp', codigos.buscar);
  router.get('/codigos-postales/estados/:estado', codigos.buscarEstado);
  router.get(
    '/codigos-postales/estados/:estado/municipios/:municipio',
    codigos.buscarEstadoMunicipio,
  );
  router.get(
    '/codigos-postales/estados/:estado/municipios/:municipio/ciudades/:ciudad',
    codigos.buscarEstadoMunicipioCiudad,
  );

  app.use('/api', router);
};
