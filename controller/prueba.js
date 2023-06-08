const words = ['Bailar', 'Caldero', 'Programar','zapato','casa','perro','gato','raton','pajaro','pescado'];
const words2 = ['manzana', 'naranja', 'banana'];
let index = 0;
let currentWords = words;
const textElement = document.querySelector('#id_words');
const buttonElement = document.createElement('button');
buttonElement.textContent = 'Desea continuar';
buttonElement.style.display = 'none';
document.body.appendChild(buttonElement);

buttonElement.addEventListener('click', () => {
 currentWords = words2;
 index = 0;
 updateText();
 buttonElement.style.display = 'none';
});

// Función para actualizar el contenido del elemento
function updateText() {
 // Obtiene la palabra actual
 const word = currentWords[index];
 
 // Crea un elemento span para cada letra de la palabra
 const letters = word.split('').map(letter => {
 const span = document.createElement('span');
 span.textContent = letter;

 // Establece la posición inicial de cada letra en un lugar aleatorio dentro del div
 const left = Math.random() * (textElement.offsetWidth - span.offsetWidth);
 const top = Math.random() * (textElement.offsetHeight - span.offsetHeight);
 span.style.left = `${left}px`;
 span.style.top = `${top}px`;

 return span;
 });
 
 // Agrega los elementos span al elemento que contiene el texto
 textElement.innerHTML = '';
 letters.forEach(letter => textElement.appendChild(letter));

 // Espera un momento antes de ordenar las letras
 setTimeout(() => {
 // Calcula el ancho total de todas las letras
 const totalWidth = letters.reduce((total, letter) => total + letter.offsetWidth, 0);

 letters.forEach((letter, i) => {
 // Calcula la posición final de cada letra y actualiza sus propiedades left y top
 const left = (textElement.offsetWidth - totalWidth) / 2 + i * letter.offsetWidth;
 const top = (textElement.offsetHeight - letter.offsetHeight) / 2;
 letter.style.left = `${left}px`;
 letter.style.top = `${top}px`;
 });
 
 // Espera otros 6 segundos antes de desordenar las letras y reiniciar la animación
 setTimeout(() => {
 letters.forEach(letter => {
 // Establece la posición de cada letra en un lugar aleatorio dentro del div
 const left = Math.random() * (textElement.offsetWidth - letter.offsetWidth);
 const top = Math.random() * (textElement.offsetHeight - letter.offsetHeight);
 letter.style.left = `${left}px`;
 letter.style.top = `${top}px`;
 });
 
 // Actualiza el índice de la palabra actual y reinicia la animación
 index++;
 if (index < currentWords.length) {
 setTimeout(updateText, 1000);
 } else if (currentWords === words) {
 buttonElement.style.display = 'block';
 }
 }, 7000);
 }, 1000);
}

// Actualiza el contenido del elemento inicialmente
updateText();
