const fs = require("fs");

function getArchivosRaiz() {
  let array = fs.readdirSync("./");
  return array;
}

function obtenerExpresion() {
  let resul = process.argv[2];
  return resul;
}
function buscarArchivos(exp, array) {
  let resultado = [];
  let i = 0;
  let coincide = false;

  while (i < array.length) {
    coincide = array[i].match(exp);
    if (coincide) {
      resultado.push(array[i]);
    }
    i += 1;
  }
  return resultado;
}

function main() {
  const archivos = getArchivosRaiz();
  const exp = obtenerExpresion();
  const archivosEncontrados = buscarArchivos(exp, archivos);
  console.log(
    "Los archivos que coinciden con la expresión son:",
    archivosEncontrados
  );
  return;
}

main();
