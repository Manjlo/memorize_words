class PlayView {
  constructor() {
    this.playButton = document.getElementById('id_play');
    this.aliasInput = document.getElementById('alias');
    this.playContinueButton = document.getElementById('id_continue');
    this.wordsContaner = document.getElementById('id_wordsContainer');
    this.yesButton = document.getElementById('id_yes');
    this.noButton = document.getElementById('id_no');
    this.infoContainer = document.getElementById('id_info_modal');
    this.infoText = document.getElementById('id_divTextInfo');
    this.infoButton = document.getElementById('id_info');
    this.infoButtonContinue = document.getElementById('id_infoButton');
    this.outButton = document.getElementById('id_closeButton');
    this.playNextButton = document.getElementById('id_next_button');
    this.modalAlias = document.getElementById('id_modalAlias');
    this.title = document.getElementById('id_title');
    this.playerLabel = document.getElementById('id_playerLabel');
    this.nameLabel = document.getElementById('label-name');
    this.playerLevel = document.getElementById('id_playerLevel');
    this.score = document.getElementById('id_score');


    this.yesButton.style.display = 'none';
    this.noButton.style.display = 'none';
    //this.playerLevel.style.display = 'block';
    //this.score.style.display = 'block';
    this.infoButton.style.display = 'block';
    this.outButton.style.display = 'none';
  }

  showPlayerLevel(level) {
    this.playerLevel.textContent = level;
  }

  showPlayerName(name) {
    this.playerLabel.textContent = name;
  }

  showScore(score) {
    this.score.textContent = score;
  }

  //Set Info Text and Show Info Modal
  showInfoModal() {
    this.infoContainer.classList.toggle("show");
  }

  showInfoText(text) {
    this.infoText.innerHTML = text;
  }

  //Hide Info Modal
  hideInfo() {
    this.infoContainer.remove()
    this.title.remove()
  }
  //Hide Info Button
  hideInfoButton() {
    this.infoButton.style.display = 'none';
  }

  showOutButton() {
    this.outButton.style.display = 'block';
  }

  // Set position of each letter in a random place inside the div
  setRandomPosition(element) {
    const left = Math.random() * (this.wordsContaner.offsetWidth - element.offsetWidth);
    const top = Math.random() * (this.wordsContaner.offsetHeight - element.offsetHeight);
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
  }


  //Split words and return array of letters with random position in an span element
  splitWord(word) {
    const leters = word.split('').map(letter => {
      const span = document.createElement('span');
      span.textContent = letter;

      //Set position of each letter in a random place inside the div
      this.setRandomPosition(span);
      return span;
    });
    return leters;
  }
  //Show word in the words container
  showWords(words, setActualWord, setIsComplete, showAccertButtons) {
    this.hideInfoButton();
    this.showOutButton();
    return new Promise((resolve, reject) => {
      this.showWordsContainer();
      let index = 0;

      const animateWord = () => {
        let word = words[index];
        console.log("word", word);
        if (setActualWord) setActualWord(word);
        let letters = this.splitWord(word);

        // Remove all letters from the words container
        this.wordsContaner.innerHTML = '';
        // Add all letters to the words container
        letters.forEach(letter => this.wordsContaner.appendChild(letter));

        // Update the text after 1 second
        setTimeout(() => {

          if (showAccertButtons) {
            this.showAccertButtons();
          }
          let wordsContainerWidth = this.wordsContaner.offsetWidth;
          letters.forEach((letter, i) => {
            // set the final position of each letter and update its left and top properties
            const left = (wordsContainerWidth / 2) - ((letters.length / 2) * letter.offsetWidth) + (i * letter.offsetWidth); // add space between letters
            const top = (this.wordsContaner.offsetHeight / 2) - letter.offsetHeight + (letter.offsetHeight - letter.offsetHeight) / 2; // center the letter vertically
            letter.style.left = `${left}px`;
            letter.style.top = `${top}px`;
          });

          // Wait 5 seconds and then start the animation
          setTimeout(() => {
            letters.forEach(letter => {
              this.setRandomPosition(letter);
            });

            // Wait additional time before moving to the next word
            setTimeout(() => {
              // Increment the index of the current word
              index++;

              if (index === words.length) {
                // If it's the last word, resolve the promise and set 'isComplete' to true
                this.wordsContaner.innerHTML = '';
                setIsComplete(true);
                resolve();
              } else {
                // If there are more words, continue animating
                animateWord();
              }
            }, 500); // Additional wait time before moving to the next word
          }, 5000); // Animation time
        }, 1000); // Initial wait time before animating the word
      };

      animateWord();
    });
  }




  showContinuePlay() {
    this.playContinueButton.style.display = 'block';
  }

  showPlayButton() {
    this.playButton.style.display = 'block';
  }

  hidePlayButton() {
    this.playButton.style.display = 'none';
  }

  showInfoContinueButton() {
    this.infoButtonContinue.style.display = 'block';
  }

  hideInfoContinueButton() {
    this.infoButtonContinue.style.display = 'none';
  }

  showChooseAcert() {
    this.yesButton.style.display = 'block';
    this.noButton.style.display = 'block';
  }

  hideChooseAcert() {
    this.yesButton.style.display = 'none';
    this.noButton.style.display = 'none';
  }

  showModalAlias() {
    this.modalAlias.style.display = "block";
  }

  hideModalAlias() {
    this.modalAlias.style.display = "none";
  }

  showWordsContainer() {
    this.wordsContaner.style.display = "block";
  }


}


export default PlayView;