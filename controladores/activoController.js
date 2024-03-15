const activoModel = require('../modelos/activoModel');
const Activo = activoModel.Activo;

const obtenerDatos = async function (req, res) {
    let p = activoModel.findAll();
    await res.json(p);
}

const obtenerPorId = async function (req, res) {
    const id = parseInt(req.params.id);
    let p = activoModel.findById(id);
    await res.json(p);
}

const obtenerPorNumSerie = async function (req, res) {
    const serie = parseInt(req.params.serie);
    let p = activoModel.findByNumeroDeSerie(serie);
    await res.json(p);
}

const agregarActivo = async function (req, res) {
    const { id, numSerie, numInv, tipo, desc, ubicacion, responsable, imagen } = req.body;
    const nuevoActivo = new Activo(id, numSerie, numInv, tipo, desc, ubicacion, responsable, imagen);
    activoModel.agregar(nuevoActivo);
    res.status(201).send('Activo agregado correctamente');
}

const actualizarActivo = async function (req, res) {
    const id = parseInt(req.params.id);
    const nuevoActivo = req.body;
    activoModel.actualizar(id, nuevoActivo);
    res.send('Activo actualizado correctamente');
}

const eliminarActivo = async function (req, res) {
    const id = parseInt(req.params.id);
    activoModel.eliminar(id);
    res.send('Activo eliminado correctamente');
}

exports.obtenerDatos = obtenerDatos;
exports.obtenerPorId = obtenerPorId;
exports.obtenerPorNumSerie = obtenerPorNumSerie;
exports.agregarActivo = agregarActivo;
exports.actualizarActivo = actualizarActivo;
exports.eliminarActivo = eliminarActivo;
