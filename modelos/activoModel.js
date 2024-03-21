let dbActivos = [
    { id: 0, numSerie: 100, numInv: 10, tipo: "Computadora", desc: 'Computadora completa(teclado, mouse y monitor), modelo Dell Optiplex 7050', ubicacion: "Salon I", responsable: "Jose Martin Olguin Espinoza", imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/1e5f628d-e926-4bff-8372-dfeccf99cdd6.01d7b958b692b40cbd8abb1a0548bdf5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" },
    { id: 1, numSerie: 150, numInv: 20, tipo: "Equipo electronico", desc: 'Switch D-Link', ubicacion: "Salon I", responsable: "Jose Martin Olguin Espinoza", imagen: "https://m.media-amazon.com/images/I/51u4W84Q7QL.jpg" },
    { id: 2, numSerie: 200, numInv: 30, tipo: "Mobiliario", desc: 'Mesa gris claro', ubicacion: "Salon A", responsable: "Jorge Eduardo Ibarra Esquer", imagen: "https://img.medicalexpo.es/images_me/photo-mg/68784-18726940.jpg" },
    { id: 3, numSerie: 250, numInv: 40, tipo: "Mobiliario", desc: 'Silla gris oscuro', ubicacion: "Salon A", responsable: "Jorge Eduardo Ibarra Esquer", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDOx4uLjDJqV_jX1yjbZRltfkgRp3eLymLA&usqp=CAU" },
    { id: 4, numSerie: 300, numInv: 50, tipo: "Equipo electronico", desc: 'Proyector Benq', ubicacion: "Salon I", responsable: "Jorge Eduardo Ibarra Esquer", imagen: "https://image.benq.com/is/image/benqco/01-mw732-front30-1?$ResponsivePreset$&fmt=png-alpha" },
];

class Activo {
    constructor(id, numSerie, numInv, tipo, desc, ubicacion, responsable, imagen) {
        this.id = id;
        this.numSerie = numSerie;
        this.numInv = numInv;
        this.tipo = tipo;
        this.desc = desc;
        this.ubicacion = ubicacion;
        this.responsable = responsable;
        this.imagen = imagen;
    }
}

let findAll = function () {
    return dbActivos;
}

let findById = function (id) {
    for (let i = 0; i < dbActivos.length; i++) {
        if (id == dbActivos[i].id) {
            const element = dbActivos[i];
            return element;
        }
    }
}

let findByNumeroDeSerie = function (numSerie) {
    for (let i = 0; i < dbActivos.length; i++) {
        if (numSerie == dbActivos[i].numSerie) {
            const element = dbActivos[i];
            return element;
        }
    }
}

let agregar = function (activo) {
    if (!dbActivos.some(item => item.id === activo.id)) {
        dbActivos.push(activo);
        console.log("Activo agregado correctamente.");
    } else {
        console.log("El activo ya existe en la base de datos.");
    }
}

let actualizar = function (id, nuevoActivo) {
    const i = dbActivos.findIndex(activo => activo.id == id);
    dbActivos[i] = nuevoActivo;
}

let eliminar = function (id) {
    dbActivos = dbActivos.filter(activo => activo.id !== id);
}

exports.findAll = findAll;
exports.findById = findById;
exports.findByNumeroDeSerie = findByNumeroDeSerie;
exports.agregar = agregar;
exports.actualizar = actualizar;
exports.eliminar = eliminar;
exports.Activo = Activo;