let dbResponsables = [
    { id: 0, numEmpleado: 301, Nombre: "Jose Martin Olguin Espinoza", ActivosAsociados: [100, 150], ImagenResponsable: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5nt0IaYH996vXo3MNMCrKLasObhoUl7MEdQPCgYoLN5VUzNRm5Mh9wI-chkjTzjquBCiFV0tWJQnVV467KlCP3kxgre7UfbtuisNnXCmr1tszRS17oJdE1QWQqPMNYGvKFpXQ1fsDPNw/s813/MartinOlguin.jpg" },
    { id: 1, numEmpleado: 302, Nombre: "Jorge Eduardo Ibarra Esquer", ActivosAsociados: [200, 250, 300], ImagenResponsable: "https://media.licdn.com/dms/image/C5603AQFzYsrBUftYlQ/profile-displayphoto-shrink_800_800/0/1576563662210?e=2147483647&v=beta&t=8rYd0Qhubb_d2tqG1m9pboZYinVBiGJ-z5dj4Ocll00" },
]

class Responsable {
    constructor(id, numEmpleado, Nombre, ActivosAsociados, ImagenResponsable) {
        this.id = id;
        this.numEmpleado = numEmpleado;
        this.Nombre = Nombre;
        this.ActivosAsociados = ActivosAsociados;
        this.ImagenResponsable = ImagenResponsable;
    }
}

let findAll = function () {
    return dbResponsables;
}

let findById = function (id) {
    for (let i = 0; i < dbResponsables.length; i++) {
        if (id == dbResponsables[i].id) {
            const element = dbResponsables[i];
            return element;
        }
    }
}

let findByNumeroEmpleado = function (numEmpleado) {
    for (let i = 0; i < dbResponsables.length; i++) {
        if (numEmpleado == dbResponsables[i].numEmpleado) {
            const element = dbResponsables[i];
            return element;
        }
    }
}

let agregar = function (responsable) {
    dbResponsables.push(responsable);
}

let actualizar = function (id, nuevoResponsable) {
    const i = dbResponsables.findIndex(activo => activo.id == id);
    dbResponsables[i] = nuevoResponsable;
}

let eliminar = function (id) {
    dbResponsables = dbResponsables.filter(responsable => responsable.id !== id);
}

exports.findAll = findAll;
exports.findById = findById;
exports.findByNumeroEmpleado = findByNumeroEmpleado;
exports.agregar = agregar;
exports.actualizar = actualizar;
exports.eliminar = eliminar;
exports.Responsable = Responsable;