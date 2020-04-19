module.exports = (app) => {
  const codigos = require("../controllers/codigo.controller.js");

  var router = require("express").Router();

  router.get("/codigos", codigos.todos);
  router.get("/codigos/:numero", codigos.buscar);
  router.get("/codigos/estados/:estado", codigos.buscarEstado);
  router.get(
    "/codigos/estados/:estado/municipios/:municipio",
    codigos.buscarEstadoMunicipio
  );
  router.get(
    "/codigos/estados/:estado/municipios/:municipio/ciudades/:ciudad",
    codigos.buscarEstadoMunicipioCiudad
  );

  app.use("/api", router);
};
