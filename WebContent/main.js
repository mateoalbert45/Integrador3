"use strict";
document.querySelector("#submitPostEstudiante").addEventListener("click", postEstudiante);
document.querySelector("#submitEstudianteLibreta").addEventListener("click", getEstudiantesLibreta);
document.querySelector("#submitGenero").addEventListener("click", getEstudiantesGenero);
document.querySelector("#getEstudiantes").addEventListener("click", getEstudiantes);
document.querySelector("#getCarrerasSegunInscriptos").addEventListener("click", getCarrerasSegunInscriptos);
document.querySelector("#getCarreraCiudad").addEventListener("click", getCarreraCiudad);
document.querySelector("#getReporte").addEventListener("click", getReporte);



 function postEstudiante(){
let nombre = document.querySelector("#idNombreInsert").value;
let apellido = document.querySelector("#idApellidoInsert").value;
let edad = document.querySelector("#idEdadInsert").value;
let genero = document.querySelector("#idGeneroInsert").value;
let ciudad = document.querySelector("#idCiudadInsert").value;
let libreta = document.querySelector("#idLibretaInsert").value;
let dni = document.querySelector("#idDniInsert").value;

let estudiante = {
      "dni": dni,
      "apellido": apellido,
       "nombre": nombre,
         "edad": edad,
         "genero": genero,
         "ciudad_residencia": ciudad,
     "numero_libreta": libreta
 };
 let url = "entregable/estudiante/add";
 fetch(url, {
     'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
     },
     'body': JSON.stringify(estudiante)
 })

}



async function getEstudiantes(){
  let  url = "entregable/estudiante/recuperarEstudiantes";
let r = await fetch(url, {
     'method': 'GET',
      'mode':'cors'
 });
let json = await r.json();
console.log(json);
let contenedor = document.querySelector("#contenedorEstudiantes");
contenedor.innerHTML = JSON.stringify(json);
}


async function getCarreraCiudad(){
  let idCarrera = document.querySelector("#idCarrera").value;
  let ciudad = document.querySelector("#Ciudad").value;

  let  url = "entregable/estudiante/estudianteSegunCarreraCiudad/" + idCarrera + "/" +  ciudad;
  let r = await fetch(url, {
     'method': 'GET',
      'mode':'cors'
    });
    let json = await r.json();
console.log(json);
let contenedor = document.querySelector("#contenedorCarreraCiudad");
contenedor.innerHTML = JSON.stringify(json);
}

async function getCarrerasSegunInscriptos(){
  let  url = "entregable/carrera/carrerasSegunInscriptos";
let r = await fetch(url, {
     'method': 'GET',
      'mode':'cors'
 });
let json = await r.json();
console.log(json);
let contenedor = document.querySelector("#contenedorCarrerasSegunInscriptos");
contenedor.innerHTML = JSON.stringify(json);
}

async function getReporte(){
  let  url = "entregable/carrera/reporteCarreras";
let r = await fetch(url, {
     'method': 'GET',
      'mode':'cors'
 });
let json = await r.json();
console.log(json);
let contenedor = document.querySelector("#contenedorReporte");
contenedor.innerHTML = JSON.stringify(json);
}

async function getEstudiantesLibreta(){
  let libreta = document.querySelector("#valueLibreta").value;
  let  url = "entregable/estudiante/estudianteSegunLibreUniversitaria/" + libreta;
let r = await fetch(url, {
     'method': 'GET',
      'mode':'cors'
 });
let json = await r.json();
console.log(json);
let contenedor = document.querySelector("#contenedorEstudiantesLibreta");
contenedor.innerHTML = JSON.stringify(json);
}

async function getEstudiantesGenero() {
    let genero = document.querySelector("#valueGenero").value;
    let url = "entregable/estudiante/estudianteSegunGenero/" + genero;
    let r = await fetch(url, {
         'method': 'GET',
          'mode':'cors'
     });
    let json = await r.json();
    console.log(json);
    let contenedor = document.querySelector("#contenedorEstudiantesGenero");
    contenedor.innerHTML = JSON.stringify(json);
  }
