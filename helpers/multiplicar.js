const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base =5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    if (listar === true) {
      console.log("=====================".green);
      console.log(`   ${'TABLA DEL'.blue}  ${colors.green(base) }  `);
      console.log("=====================".green);

      for (let i = 1; i <= hasta; i++) {
        let tabla = i * base;
        salida += `${base} x ${i} = ${tabla} \n`;
      }

      console.log(salida);
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      return `tabla-${base}.txt`;

    } else {
      for (let i = 1; i <= hasta; i++) {
        let tabla = i * base;
        salida += `${base} x ${i} = ${tabla}\n`;
      }
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      return `tabla-${base}.txt`;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
