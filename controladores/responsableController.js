const responsableModel = require('../modelos/responsableModel');
const Responsable = responsableModel.Responsable;

const obtenerDatos = async function (req, res) {
    let p = responsableModel.findAll();
    await res.json(p);
}

const obtenerPorId = async function (req, res) {
    const id = parseInt(req.params.id);
    let p = responsableModel.findById(id);
    await res.json(p);
}

const obtenerPorNumeroEmpleado  = async function (req, res) {
    const num = parseInt(req.params.num);
    let p = responsableModel.findByNumeroEmpleado(num);
    await res.json(p);
}

const agregarResponsable = async function (req, res) {
    const { id, numEmpleado, Nombre, ActivosAsociados, ImagenResponsable } = req.body;
    const nuevoResponsable = new Responsable(id, numEmpleado, Nombre, ActivosAsociados, ImagenResponsable);
    responsableModel.agregar(nuevoResponsable);
    res.status(201).send('Responsable agregado correctamente');
}

const actualizarResponsable = async function (req, res) {
    const id = parseInt(req.params.id);
    const nuevoResponsable = req.body;
    responsableModel.actualizar(id, nuevoResponsable);
    res.send('Responsable actualizado correctamente');
}

const eliminarResponsable = async function (req, res) {
    const id = parseInt(req.params.id);
    responsableModel.eliminar(id);
    res.send('Responsable eliminado correctamente');
}

exports.obtenerDatos = obtenerDatos;
exports.obtenerPorId = obtenerPorId;
exports.obtenerPorNumeroEmpleado = obtenerPorNumeroEmpleado;
exports.agregarResponsable = agregarResponsable;
exports.actualizarResponsable = actualizarResponsable;
exports.eliminarResponsable = eliminarResponsable;