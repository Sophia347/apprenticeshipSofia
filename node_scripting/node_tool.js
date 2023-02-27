import { Octokit } from "octokit";

function obtenerRepositorio() {
  let resul = process.argv[2];
  return resul;
}

function main() {
  const repo = obtenerRepositorio();
  console.log("repositorio", repo);
}

main();
