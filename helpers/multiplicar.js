const fs = require('fs')
const colors = require('colors');
const crearArchivo = async(base = 5, listar, hasta = 1) => {
    try {
        let salida = "";
        for (let i = 0; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base*i}\n`
            if (listar == true) {

                console.log(colors.green(base), 'x'.red, colors.green(i), "=".magenta, colors.bold.blue(base * i))

            }
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return (`tabla-${base}.txt`)

    } catch (err) {
        throw err
    }

}
module.exports = {
    crearArchivo
}