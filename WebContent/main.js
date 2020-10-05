"use strict";
document.querySelector("#submitPostEstudiante").addEventListener("click", postEstudiante);

async function postEstudiante(){
let nombre = document.querySelector("#idNombreInsert").value;
let apellido = document.querySelector("#idApellidoInsert").value;
let edad = document.querySelector("#idEdadInsert").value;
let genero = document.querySelector("#idGeneroInsert").value;
let ciudad = document.querySelector("#idCiudadInsert").value;
let libreta = document.querySelector("#idLibretaInsert").value;
let dni = document.querySelector("#idDniInsert").value;

let estudiante = {
      "dni": 1323,
      "apellido": "por",
       "nombre": "favor",
         "edad": 2,
         "genero": "genero",
         "ciudad_residencia": "ciudad",
     "numero_libreta": 123
 };
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
console.log(estudiante);
 let url = "http://localhost:8080/Integrador3/entregable/estudiante/add";
 fetch("http://localhost:8080/Integrador3/entregable/estudiante/add", {
     'method': 'POST',
     'headers': {
         'Content-type': 'application/json'
     },
     'body': JSON.stringify(estudiante)
 }).then(r => r.json())
     .then(json => {
         console.log(json);
     });

}
