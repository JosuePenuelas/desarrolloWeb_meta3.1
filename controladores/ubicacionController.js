const ubicacionModel = require('../modelos/ubicacionModel');
const Ubicacion = ubicacionModel.Ubicacion;

const obtenerDatos = async function (req, res) {
    let p = ubicacionModel.findAll();
    await res.json(p);
}

const obtenerPorId = async function (req, res) {
    const id = parseInt(req.params.id);
    let p = ubicacionModel.findById(id);
    await res.json(p);
}

const agregarUbicacion = async function (req, res) {
    const { id, descripcion, activosAsociados, imagenUbi } = req.body;
    const nuevaUbicacion = new Ubicacion(id, descripcion, activosAsociados, imagenUbi);
    ubicacionModel.agregar(nuevaUbicacion);
    res.status(201).send('Ubicacion agregado correctamente');
}

const actualizarUbicacion = async function (req, res) {
    const id = parseInt(req.params.id);
    const nuevaUbicacion = req.body;
    ubicacionModel.actualizar(id, nuevaUbicacion);
    res.send('Ubicacion actualizado correctamente');
}

const eliminarUbicacion = async function (req, res) {
    const id = parseInt(req.params.id);
    ubicacionModel.eliminar(id);
    res.send('Ubicacion eliminado correctamente');
}

exports.obtenerDatos = obtenerDatos;
exports.obtenerPorId = obtenerPorId;
exports.agregarUbicacion = agregarUbicacion;
exports.actualizarUbicacion = actualizarUbicacion;
exports.eliminarUbicacion = eliminarUbicacion;

