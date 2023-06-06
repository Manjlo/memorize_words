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

  //Set Info Text and Show Info Modal
  showInfo(text) {
    this.infoText.innerHTML = text;
    this.infoContainer.style.display = 'block';
  }

  //Hide Info Modal
  hideInfo() {
    this.infoContainer.style.display = 'none';
  }


  // Set position of each letter in a random place inside the div
  getRandomPosition(element) {
    const left = Math.random() * (this.wordsContainer.offsetWidth - element.offsetWidth);
    const top = Math.random() * (this.wordsContainer.offsetHeight - element.offsetHeight);
    return { left, top };
  }

  //Split words and return array of letters with random position in an span element
  splitWord(word) {
    const leters = word.split('').map(letter => {
      const span = document.createElement('span');
      span.textContent = letter;

      //Set position of each letter in a random place inside the div
      let position = this.getRandomPosition(span);
      span.style.left = `${position.left}px`;
      span.style.top = `${position.top}px`;

      return span;
    });
  }



  //Show word in the words container
  showWords(words) {

    let index = 0;
    let word = words[index];
    let letters = this.splitWord(word);

    //Remove all letters from the words container
    this.wordsContainer.innerHTML = '';
    //Add all letters to the words container
    letters.forEach(letter => this.wordsContainer.appendChild(letter));

    // Update the text after 1 second
    setTimeout(() => {
      letters.forEach((letter, i) => {
        // set the final position of each letter and update its left and top properties
        const left = i * (letter.offsetWidth + 30); // add space between letters
        const top = (textElement.offsetHeight - letter.offsetHeight) / 2;
        letter.style.left = `${left}px`;
        letter.style.top = `${top}px`;
      });

      // Wait 5 seconds and then start the animation
      setTimeout(() => {
        letters.forEach(letter => { 
          let position = this.getRandomPosition(letter);
          letter.style.left = `${left}px`;
          letter.style.top = `${top}px`;
        });


        // Actualiza el índice de la palabra actual y reinicia la animación
        index = (index + 1) % words.length;
        setTimeout(updateText, 1000);
      }, 5000);
    }, 1000);
  }

}





