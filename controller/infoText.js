// Definimos las variables con el texto de la informacion 
var info_1 = "Se te presentará una secuencia de palabras, una detras de otra. Memorizalas todas. El orden no es relevante."

var info_2 = "Tras la serie de palabras a memorizar, el juego te presentará un listado con el doble de palabras."

var info_3 = "Si la palabra pertenece al listado que has memorizado, pulsa el botón 'SI'. Si no, pulsa el botón 'NO'."

var info_4 = " Si tardas mucho en responder, el juego lo considerará como un fallo."

// Creamos un arreglo con las variables
var textos = [info_1, info_2,  info_3, info_4];

// Definimos una variable para llevar la cuenta de qué texto se está mostrando
var indiceActual = 0;

// Seleccionamos el elemento div donde se va a mostrar el texto
var miDiv = document.getElementById("id_divTextInfo");

// Asignamos el contenido inicial del div al primer texto en el arreglo
miDiv.innerHTML = textos[0];

// Creamos una función para cambiar el contenido del div
function cambiarTexto() {
    // Incrementa el índice actual
    indiceActual++;

    // Si el índice actual es mayor que la cantidad de textos, vuelve a empezar desde el principio
    if (indiceActual >= textos.length) {
        indiceActual = 0;
    }

    // Cambia el contenido del div al siguiente texto en el arreglo
    miDiv.innerHTML = textos[indiceActual];
}

// Selecciona el botón y agrega un evento de clic para llamar a la función cambiarTexto
var miBoton = document.getElementById("id_infoButton");
miBoton.addEventListener("click", cambiarTexto);
