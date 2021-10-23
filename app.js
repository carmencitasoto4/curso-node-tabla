const { crearArchivo } = require("./helpers/multiplicar")
const argv = require('./config/yargs')
const colors = require('colors');


console.clear();

/*const [, , arg3] = process.argv
const [, base = 5] = arg3.split("=")
console.log(base)
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch(err => console.log(err))*/


//console.log(process.argv) opccion de la consola
console.log(argv) //esto  ya es yargs
console.log(argv.base)
crearArchivo(argv.base, argv.listar, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo), "creado"))
    .catch(err => console.log(err))