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
    this.wordsContainer.innerHTML = word;
  }



  

}