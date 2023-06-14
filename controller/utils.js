// Definimos las variables con el texto de la informacion 
var info_1 = "Se te presentará una secuencia de palabras, una detras de otra. Memorizalas todas. El orden no es relevante."

var info_2 = "Tras la serie de palabras a memorizar, el juego te presentará un listado con el doble de palabras."

var info_3 = "Si la palabra pertenece al listado que has memorizado, pulsa el botón 'SI'. Si no, pulsa el botón 'NO'."

var info_4 = " Si tardas mucho en responder, el juego lo considerará como un fallo."

// Creamos un arreglo con las variables
var textos = [info_1, info_2,  info_3, info_4];


const CONFIG = {
  levels: [
    { level: 1, wordsToMemorize: 10, words: 20, time: 5, aciertos: 70 },
    { level: 2, wordsToMemorize: 20, words: 40, time: 5, aciertos: 70 },
    { level: 3, wordsToMemorize: 25, words: 50, time: 5, aciertos: 75 },
    { level: 4, wordsToMemorize: 30, words: 60, time: 5, aciertos: 80 },
    { level: 5, wordsToMemorize: 35, words: 70, time: 5, aciertos: 80 },
    { level: 6, wordsToMemorize: 40, words: 80, time: 5, aciertos: 85 },
    { level: 7, wordsToMemorize: 50, words: 100, time: 5, aciertos: 90 },
    { level: 8, wordsToMemorize: 60, words: 120, time: 5, aciertos: 90 },
    { level: 9, wordsToMemorize: 70, words: 140, time: 5, aciertos: 95 },
    { level: 10, wordsToMemorize: 100, words: 200, time: 5, aciertos: 100},
  ],
  infoText: textos,
  timeToMemorize: 5,
  timeToResponse: 7,

}

export default CONFIG;