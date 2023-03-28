const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar"
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla en consola"
    },
    h: {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "X cantida para la tabla"
      },
  })

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }else if(isNaN(argv.h)){

      throw "La hasta debe ser un numero";
    }
    return true;
  }).argv;

  module.exports = argv