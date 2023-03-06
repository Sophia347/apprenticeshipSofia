/* eslint-disable no-undef */
require("dotenv").config();
const authentication = process.env.GITHUB_TOKEN;
const { Octokit } = require("@octokit/core");

function obtenerRepositorio() {
  let resul = process.argv[2];
  return resul;
}

async function enlistarProyectos(repo) {
  const octokit = new Octokit({ auth: authentication });
  const projectsUrl = "/projects";
  const reposUrl = "GET /repos";

  const { data } = await octokit.request(`${reposUrl}${repo}${projectsUrl}`);

  let resultado = [];

  let i = 0;
  let proyecto = {};
  while (i < data.length) {
    proyecto = data[i];

    resultado.push({ proyecto_id: proyecto.id, proyecto_name: proyecto.name });
    i += 1;
  }

  return resultado;
}

async function enlistarColumnas(projects_ids) {
  const octokit = new Octokit({ auth: authentication });
  let resultado = [];
  let i = 0;
  let project_id = 0;
  while (i < projects_ids.length) {
    project_id = projects_ids[i].proyecto_id;
    const projectsUrl = "GET /projects/";
    const columnsUrl = "/columns";

    const { data } = await octokit.request(
      `${projectsUrl}${project_id}${columnsUrl}`
    );

    resultado.push({
      data: data,
      proyecto_name: projects_ids[i].proyecto_name,
    });
    i += 1;
  }
  let columnsIdsFinal = [];

  for (i in resultado) {
    let columnsList = resultado[i].data;

    for (j in columnsList) {
      let column = columnsList[j];

      columnsIdsFinal.push({
        column_id: column.id,
        column_name: column.name,
        proyecto_name: resultado[i].proyecto_name,
      });
    }
  }

  return columnsIdsFinal;
}

async function enlistarCards(columns_ids) {
  const octokit = new Octokit({ auth: authentication });
  let resultado = [];
  let i = 0;
  let column_id = 0;
  while (i < columns_ids.length) {
    column_id = columns_ids[i].column_id;
    const projectsUrl = "GET /projects";
    const columnsUrl = "/columns/";
    const cardsUrl = "/cards";
    const { data } = await octokit.request(
      `${projectsUrl}${columnsUrl}${column_id}${cardsUrl}`
    );

    if (data.length !== 0) {
      let j = 0;

      let card = {};
      while (j < data.length) {
        card = data[j];
        resultado.push({
          card_id: card.id,
          columns_name: columns_ids[i].column_name,
          proyecto_name: columns_ids[i].proyecto_name,
        });
        j += 1;
      }
    }

    i += 1;
  }
  return resultado;
}

async function getCardsNames(cards_ids) {
  const octokit = new Octokit({ auth: authentication });
  const projectsUrl = "GET /projects";
  const columnsUrl = "/columns";
  const cardsUrl = "/cards/";

  let resultado = [];

  for (const card of cards_ids) {
    let card_id = card.card_id;
    try {
      const { data } = await octokit.request(
        `${projectsUrl}${columnsUrl}${cardsUrl}${card_id}`
      );
      if (data.content_url !== null) {
        const content = await octokit.request(data.content_url);
        if (content.data.title) {
          resultado.push({
            card_name: content.data.title,
            columns_name: card.columns_name,
            proyecto_name: card.proyecto_name,
          });
        }
      }
    } catch (error) {
      console.log(
        `Error al obtener información de la tarjeta ${card_id}:`,
        error
      );
    }
  }
  return resultado;
}

async function main() {
  const repo = obtenerRepositorio();
  try {
    const projects_ids = await enlistarProyectos(repo);
    const columns_ids = await enlistarColumnas(projects_ids);
    const cards_ids = await enlistarCards(columns_ids);
    const card_names = await getCardsNames(cards_ids);
    console.log("card_names:", card_names);
  } catch (error) {
    console.error("Error al obtener la información del repositorio:", error);
  }
}

main();
