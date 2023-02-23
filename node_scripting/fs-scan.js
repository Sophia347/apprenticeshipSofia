
const fs = require("fs");

function archivosRaiz(){
    let array = fs.readdirSync("./");
    return array;
}

const archivos  = archivosRaiz();


function expresion(){
  let resul = process.argv[2];
  return resul;

}
const exp = expresion();
console.log("expresion: ", exp);

function busqueda(exp, array) {
  let resultado = [];
  let i = 0;
  while (i < array.length) {
    let lista = array[i].match(exp);
    if (lista) {
    resultado.push(array[i]);
    }
    i += 1;
  } 
  return resultado;
}

console.log("busqueda", busqueda(exp,archivos));
