/* eslint-disable no-undef */ require("dotenv").config();
const authentication = process.env.GITHUB_TOKEN;
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: authentication });
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
async function enlistarColumnas(projects) {
  let dataTmp = [];
  let i = 0;
  let project_id = 0;
  const projectsUrl = "GET /projects/";
  const columnsUrl = "/columns";
  while (i < projects.length) {
    project_id = projects[i].proyecto_id;
    const { data } = await octokit.request(
      `${projectsUrl}${project_id}${columnsUrl}`
    );
    dataTmp.push({ data: data, proyecto_name: projects[i].proyecto_name });
    i += 1;
  }
  let columns_result = [];
  for (i in dataTmp) {
    let columnsList = dataTmp[i].data;
    for (j in columnsList) {
      let column = columnsList[j];
      columns_result.push({
        column_id: column.id,
        column_name: column.name,
        proyecto_name: dataTmp[i].proyecto_name,
      });
    }
  }
  return columns_result;
}
async function enlistarCards(columns) {
  let resultado = [];
  let i = 0;
  let column_id = 0;
  while (i < columns.length) {
    column_id = columns[i].column_id;
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
          column_name: columns[i].column_name,
          proyecto_name: columns[i].proyecto_name,
        });
        j += 1;
      }
    }
    i += 1;
  }
  return resultado;
}
async function getCardsNames(cards) {
  const projectsUrl = "GET /projects";
  const columnsUrl = "/columns";
  const cardsUrl = "/cards/";
  let resultado = [];
  for (const card of cards) {
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
            column_name: card.column_name,
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
    const projects = await enlistarProyectos(repo);
    const columns = await enlistarColumnas(projects);
    const cards = await enlistarCards(columns);
    const projects_info = await getCardsNames(cards);
    console.log(
      "Información de los proyectos del repositorio: ",
      repo,
      "\n",
      projects_info
    );
  } catch (error) {
    console.error("Error al obtener la información del repositorio:", error);
  }
}
main();
