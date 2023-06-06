class PlayView {
  constructor() {
    this.playButton = document.getElementById('play');
    this.aliasInput = document.getElementById('alias');
    this.playContinueButton = document.getElementById('id_continue');
    this.wordsContainer = document.getElementById('id_wordsContainer');
    this.yesButton = document.getElementById('id_yes');
    this.noButton = document.getElementById('id_no');
    this.infoContainer = document.getElementById('id_info_modal');
    this.infoText = document.getElementById('id_divTextInfo');
    this.infoButton = document.getElementById('id_info');
    this.outButton = document.getElementById('out-button');
  }

  showInfo(text) {
    this.infoText.innerHTML = text;
    this.infoContainer.style.display = 'block';
  }

  hideInfo() {
    this.infoContainer.style.display = 'none';
  }

  splitWord(word) {
    const leters=word.split('').map(letter => {
      const span = document.createElement('span');
      span.textContent = letter;

      // Establece la posición inicial de cada letra en un lugar aleatorio dentro del div
      const left = Math.random() * (this.wordsContainer.offsetWidth - span.offsetWidth);
      const top = Math.random() * (this.wordsContainer.offsetHeight - span.offsetHeight);
      span.style.left = `${left}px`;
      span.style.top = `${top}px`;

      return span;
    });
  }

  showWord(word) {
    let letters = this.splitWord(word);
 // Agrega los elementos span al elemento que contiene el texto
  textElement.innerHTML = '';
  letters.forEach(letter => textElement.appendChild(letter));
  
  // Espera un momento antes de ordenar las letras
  setTimeout(() => {
    letters.forEach((letter, i) => {
      // Calcula la posición final de cada letra y actualiza sus propiedades left y top
      const left = i * (letter.offsetWidth + 30); // Agrega un espacio adicional entre las letras
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
      index = (index + 1) % words.length;
      setTimeout(updateText, 1000);
    }, 6000);
  }, 1000);
}

    this.wordsContainer.innerHTML = word;
  }





}