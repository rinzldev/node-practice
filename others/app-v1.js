//en esta parte 👇 estamos llamando fs, es decir importando para luego usar.
const fs = require("fs"); // fs nos permite acceder a los metodos para trabajar con archivos.
console.clear();
console.log("=====================");
console.log("     TABLA DEL 5   ");
console.log("=====================");

const base = 2;
let salida = "";
for (let i = 1; i <= 10; i++) {
  let tabla = i * base;
  salida += `${base} x ${i} = ${tabla}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`tabla-${base}.txt creado`);
});
