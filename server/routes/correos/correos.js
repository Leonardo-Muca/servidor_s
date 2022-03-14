const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Correo = require('../../models/correos.model');
const app = express();

app.get('/correo', function (req, res) {
  let desde = req.query.desde || 0;
  let hasta = req.query.hasta || 5;

  Correo.find({ })
    .skip(Number(desde))
    .limit(Number(hasta))
    .exec((err, correos) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          msg: 'Ocurrio un error al moento de consultar',
          err
        });
      }

      res.json({
        ok: true,
        msg: 'Lista de correos obtenida con exito',
        conteo: correos.length,
        correos
      });
    });
});


app.post('/correo', function (req, res) {//req = obtener datos mandados por el cliente, res = mandar una respuesta
  let body = req.body;
  console.log(body)
  let cor = new Correo({

    email: body.email
  });
  cor.save((err, corBD) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        msg: 'Ocurrio un error',
        err
      });
    }

    return res.json({
      ok: true,
      msg: 'Correo insertado con exito',
      corBD
    });
  }
  )
});

module.exports = app;