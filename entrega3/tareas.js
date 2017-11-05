/**
 * ============================
 * Ejercicio entregable 3.
 * Funciones de orden superior.
 * ============================
 * 
 * Puedes ejecutar los tests ejecutando `mocha` desde el directorio en el que se encuentra
 * el fichero `tareas.js`.
 */
"use strict";

let listaTareas = [
  { text: "Preparar práctica PDAP", tags: ["pdap", "practica"] },
  { text: "Mirar fechas congreso", done: true, tags: [] },
  { text: "Ir al supermercado", tags: ["personal"] },
  { text: "Mudanza", done: false, tags: ["personal"] },
];

/**
 * Devuelve las tareas de la lista de entrada que no hayan sido finalizadas.
 */

function getToDoTasks(task){
  let unfinished = task.filter(n=> !n.done);
  return unfinished.map(n => n.text);
 }

function findByTag(tasks,tag) {
  return tasks.filter(x => x.tags.indexOf(tag) != -1);
}

function findByTags(tasks,tags) {
  return tasks.filter(x => x.tags.some(y => tags.indexOf(y)!= -1));  
}

function countDone(tasks) {
  return tasks.reduce((acum, n) => {if(n.done) {return ++acum;} else {return acum;}}, 0); 
}

function createTask(text) {
  let regexp = /@(\w+)/g;
  let task = {text:"", tags: []};
  
  let myTags = text.match(regexp);
  let myText = text.replace(regexp, "").trim();
  task.text = myText;
  
  if (myTags !== null) {
     myTags.forEach(tag => {task.tags.push(tag.replace("@", ""))});
  }
  return task;
}

/*
  NO MODIFICAR A PARTIR DE AQUI
  Es necesario para la ejecución de tests
*/
module.exports = {
  getToDoTasks: getToDoTasks,
  findByTag: findByTag,
  findByTags: findByTags,
  countDone: countDone,
  createTask: createTask
}