/*jshint esversion: 8*/
const express = require('express');
const app = express();

const tareasController = require('../routes/tarea/tareas');
const proyectosController = require('../routes/proyecto/proyectos');

app.use('', require('./usuario/usuario'));
app.use('', require('./correos/correos'));
app.use('', require('./login/login'));
//Tareas
app.post('/tareas', tareasController.add);
app.get('/tareas', tareasController.list);
app.get('/tareasfinalizadas', tareasController.listTareaF);
app.get('/tareaspendientes', tareasController.listTareaP);
app.get('/tareasxusuarioDev/:id/:idProyecto', tareasController.listTareaXidUsuarioDev2);
app.get('/tareasxusuarioTester/:id/:idProyecto', tareasController.listTareaXidUsuarioTester2);
app.get('/tareasxusuarioAdmin/:id/:idProyecto', tareasController.listTareaXidUsuarioAdm2);
app.get('/tareasxusuarioDev/:id/', tareasController.listTareaXidUsuarioDev);
app.get('/tareasxusuarioTester/:id', tareasController.listTareaXidUsuarioTester);
app.get('/tareasxusuarioAdmin/:id', tareasController.listTareaXidUsuarioAdm);
app.get('/tareas/:id', tareasController.show);
app.put('/tareas/:id', tareasController.update);
app.delete('/tareas/:id', tareasController.delete);

app.post('/proyectos', proyectosController.add);
app.get('/proyectos', proyectosController.list);
//Put:/usuarios/:id
app.put('/proyectos/:id', proyectosController.update);
app.get('/proyectos/:id', proyectosController.show);
app.delete('/proyectos/:id', proyectosController.delete);
module.exports = app;