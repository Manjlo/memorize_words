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

  showWord(word) {
    const letters = word.split('').map(letter => {
      const span = document.createElement('span');
      span.textContent = letter;

      // Establece la posición inicial de cada letra en un lugar aleatorio dentro del div
      const left = Math.random() * (this.wordsContainer.offsetWidth - span.offsetWidth);
      const top = Math.random() * (textElement.offsetHeight - span.offsetHeight);
      span.style.left = `${left}px`;
      span.style.top = `${top}px`;

      return span;
    });
    this.wordsContainer.innerHTML = word;
  }





}