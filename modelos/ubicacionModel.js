let dbUbicaciones = [
    { id: 0, descripcion: "Salon I", activosAsociados: [100, 150, 300], imagenUbi: "https://ingenieria.mxl.uabc.mx/pe_ico/images/Laboratorio/Laboratorios/salon.JPG" },
    { id: 1, descripcion: "Salon A", activosAsociados: [200, 250], imagenUbi: "https://ingenieria.mxl.uabc.mx/pe_ico/images/Laboratorio/Laboratorios/Mac.JPG" },
    { id: 2, descripcion: "AudioVisual", activosAsociados: [], imagenUbi: "https://comunicacioninstitucional.uabc.mx/sites/default/files/styles/max_325x325/public/espacios-uabc/salaaudiovisual122.jpg?itok=qAZwomuI" },
]

class Ubicacion {
    constructor(id, descripcion, activosAsociados, imagenUbi) {
        this.id = id;
        this.descripcion = descripcion;
        this.activosAsociados = activosAsociados;
        this.imagenUbi = imagenUbi;
    }
}

let findAll = function () {
    return dbUbicaciones;
}

let findById = function (id) {
    for (let i = 0; i < dbUbicaciones.length; i++) {
        if (id == dbUbicaciones[i].id) {
            const element = dbUbicaciones[i];
            return element;
        }
    }
}

let agregar = function (ubicacion) {
    if (!dbUbicaciones.some(item => item.id === ubicacion.id)) {
        dbUbicaciones.push(ubicacion);
        console.log("Activo agregado correctamente.");
    } else {
        console.log("El activo ya existe en la base de datos.");
    }
}

let actualizar = function (id, nuevaUbicacion) {
    const i = dbUbicaciones.findIndex(ubicacion => ubicacion.id == id);
    dbUbicaciones[i] = nuevaUbicacion;
}

let eliminar = function (id) {
    dbUbicaciones = dbUbicaciones.filter(ubicacion => ubicacion.id !== id);
}

exports.findAll = findAll;
exports.findById = findById;
exports.agregar = agregar;
exports.actualizar = actualizar;
exports.eliminar = eliminar;
exports.Ubicacion = Ubicacion;