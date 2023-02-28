/* eslint-disable no-undef */
require("dotenv").config(); // dotenv es una librería que se utiliza para cargar variables de entorno desde un archivo .env //
const authentication = process.env.GITHUB_TOKEN; //esta variable  autenticación de GitHub que se utilizará para hacer las solicitudes a la API de GitHub.//
const { Octokit } = require("@octokit/core");

function obtenerRepositorio() {
  let resul = process.argv[2];
  return resul;
}
/*async function enlistarTareas(repo) {
  const octokit = new Octokit({ auth: authentication });
  const { data } = await octokit.request(`GET /repos${repo}/projects`);

  return data;
}*/

async function enlistarProyectos(repo) {
  const octokit = new Octokit({ auth: authentication });
  const projectsUrl = "/projects";
  const reposUrl = "GET /repos";

  const { data } = await octokit.request(`${reposUrl}${repo}${projectsUrl}`);

  return data;
}

async function main() {
  const repo = obtenerRepositorio();
  try {
    const informacionDelRepositorio = await enlistarProyectos(repo);
    console.log("Información del repositorio:", informacionDelRepositorio);
  } catch (error) {
    console.error("Error al obtener la información del repositorio:", error);
  }
}

main();
