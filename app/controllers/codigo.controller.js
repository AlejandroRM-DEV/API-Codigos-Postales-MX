const db = require("../models");
const Codigo = db.codigos;

const query = function (req, res, where) {
  const camposPermitidos = [
    "codigo",
    "estado",
    "municipio",
    "ciudad",
    "asentamiento",
    "tipo_asentamiento",
  ];

  let options = {};
  if (req.query.filter !== undefined && req.query.filter.campos !== undefined) {
    const campos = Array.isArray(req.query.filter.campos)
      ? req.query.filter.campos.filter((key) => camposPermitidos.includes(key))
      : [req.query.filter.campos];
    options.attributes = campos;
    options.group = campos;
  } else {
    options.attributes = { exclude: ["id"] };
  }
  if (where) options.where = where;

  Codigo.findAll(options)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Ocurrio un error" + err,
      });
    });
};

exports.todos = (req, res) => {
  query(req, res);
};

exports.buscar = (req, res) => {
  query(req, res, { codigo: req.params.numero });
};

exports.buscarEstado = (req, res) => {
  query(req, res, { estado: req.params.estado });
};

exports.buscarEstadoMunicipio = (req, res) => {
  query(req, res, {
    estado: req.params.estado,
    municipio: req.params.municipio,
  });
};

exports.buscarEstadoMunicipioCiudad = (req, res) => {
  query(req, res, {
    estado: req.params.estado,
    municipio: req.params.municipio,
    ciudad: req.params.ciudad,
  });
};
