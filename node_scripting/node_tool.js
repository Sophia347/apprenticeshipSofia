/* eslint-disable no-undef */
require("dotenv").config();
const authentication = process.env.GITHUB_TOKEN;
const { Octokit } = require("@octokit/core");

function obtenerRepositorio() {
  let resul = process.argv[2];
  return resul;
}

function main() {
  const repo = obtenerRepositorio();
  console.log("repositorio", repo, authentication);
}

main();
