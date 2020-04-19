const db = require('../models');

const { CodigoPostal } = db;

const query = function query(req, res, where) {
  const camposPermitidos = [
    'codigo_postal',
    'estado',
    'municipio',
    'ciudad',
    'asentamiento',
    'tipo_asentamiento',
  ];

  const options = {};
  if (req.query.filtros !== undefined && req.query.filtros.campos !== undefined) {
    const campos = Array.isArray(req.query.filtros.campos)
      ? req.query.filtros.campos.filter((key) => camposPermitidos.includes(key))
      : [req.query.filtros.campos];
    options.attributes = campos;
    options.group = campos;
  } else {
    options.attributes = { exclude: ['id'] };
  }
  if (where) options.where = where;

  CodigoPostal.findAll(options)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Ocurrio un error${err}`,
      });
    });
};

exports.todos = (req, res) => {
  query(req, res);
};

exports.buscar = (req, res) => {
  query(req, res, { codigo_postal: req.params.cp });
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
