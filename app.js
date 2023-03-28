const { crearArchivo } = require("./helpers/multiplicar");
const colors = require('colors')
const argv = require("./config/yargs")
console.clear();
console.log("base: yargs: ", argv.b, "listar: ", argv.l, argv.h);

// const [, , arg3 = "base=6"] = process.argv;
// const [, base = 5] = arg3.split("=");

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(colors.rainbow(nombreArchivo), "creado"))
  .catch((err) => console.log(err, "all wrong"));
