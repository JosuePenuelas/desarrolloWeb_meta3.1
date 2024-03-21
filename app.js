//http://localhost:4000/
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const activoController = require('./controladores/activoController');
const ubicacionController = require('./controladores/ubicacionController');
const responsableController = require('./controladores/responsableController');

app.get('/', (req, res) => {
    res.send('Meta 3.1: Implementar un servicio web REST')
});

//activos
app.get('/activos', activoController.obtenerDatos);
app.get('/activos/id:id', activoController.obtenerPorId);
app.get('/activos/Numserie:serie', activoController.obtenerPorNumSerie);
app.post('/activos', activoController.agregarActivo);
app.put('/activos/id:id', activoController.actualizarActivo);
app.delete('/activos/id:id', activoController.eliminarActivo);

//responsables
app.get('/responsables', responsableController.obtenerDatos);
app.get('/responsables/id:id', responsableController.obtenerPorId);
app.get('/responsables/numEmpleado:num', responsableController.obtenerPorNumeroEmpleado);
app.post('/responsables', responsableController.agregarResponsable);
app.put('/responsables/id:id', responsableController.actualizarResponsable);
app.delete('/responsables/id:id', responsableController.eliminarResponsable);

//ubicaciones
app.get('/ubicaciones', ubicacionController.obtenerDatos);
app.get('/ubicaciones/id:id', ubicacionController.obtenerPorId);
app.post('/ubicaciones', ubicacionController.agregarUbicacion);
app.put('/ubicaciones/id:id', ubicacionController.actualizarUbicacion);
app.delete('/ubicaciones/id:id', ubicacionController.eliminarUbicacion);

app.listen(port, () => {
    console.log('Servidor escuchando el puerto:', port)
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err)
});