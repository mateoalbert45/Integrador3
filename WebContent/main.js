"use strict";
document.querySelector("#submitPostEstudiante").addEventListener("click", postEstudiante);
document.querySelector("#submitEstudianteLibreta").addEventListener("click", getEstudiantesLibreta);
document.querySelector("#submitGenero").addEventListener("click", getEstudiantesGenero);
document.querySelector("#getEstudiantes").addEventListener("click", getEstudiantes);
document.querySelector("#getCarrerasSegunInscriptos").addEventListener("click", getCarrerasSegunInscriptos);
document.querySelector("#getCarreraCiudad").addEventListener("click", getCarreraCiudad);
document.querySelector("#getReporte").addEventListener("click", getReporte);



 function postEstudiante(){ //Método para postear un estudiante, agarramos los values de los inputs de la pagina, creamos un objeto con esos datos y lo subimos a la base
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



async function getEstudiantes(){ //Método para obtener los estudiantes, le pedimos los datos a la base mediante un protocolo HTTP GET y lo volcamos en el HTML
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


async function getCarreraCiudad(){//Método para obtener los estudiantes filtrados por carrera y ciudad, le pedimos los datos a la base mediante un protocolo HTTP GET y lo volcamos en el HTML
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

async function getCarrerasSegunInscriptos(){ //Método para obtener las carreras, le pedimos los datos a la base mediante un protocolo HTTP GET y lo volcamos en el HTML
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

async function getReporte(){ //Método para obtener los reportes de las carreras, le pedimos los datos a la base mediante un protocolo HTTP GET y lo volcamos en el HTML
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

async function getEstudiantesLibreta(){ //Método para obtener los estudiantes filtrados por su numero de libreta, le pedimos los datos a la base mediante un protocolo HTTP GET y lo volcamos en el HTML
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

async function getEstudiantesGenero() { //Método para obtener los estudiantes filtrados por su género, le pedimos los datos a la base mediante un protocolo HTTP GET y lo volcamos en el HTML
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
