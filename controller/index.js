import { Level, User, Words } from "../model/index.js";
import PlayView from "../view/index.js";
import CONFIG from "./utils.js";

console.log("run");

class PlayController {
  constructor() {
    this.view = new PlayView();
    this.player = null;
    this.level = null;
    this.wordsToMemorize = null;
    this.words = null;
    this.actualWord = null;
    this.word = null;
    this.acertNumber = 0;
    this.checkAcert = false;
    this.isComplete = false;
    this.indexInfo = 0;
    this.view.playButton.addEventListener('click', this.initGame.bind(this));
    this.view.playContinueButton.addEventListener('click', this.saveUser.bind(this));
    this.view.infoButton.addEventListener('click', this.showInfoModal.bind(this));
    this.view.outButton.addEventListener("click", this.outGame.bind(this))

  }
  //Get User from Local Storage
  getUserToLocalStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      let newUser = JSON.parse(user);
      this.player = new User(newUser.nickname);
      this.player.setLevel(newUser.actualLevel);
    }
  }

  //Save User in Local Storage
  setUserToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.player));
  }

  setActualWord(word) {
    if (this.actualWord === null) {
      this.actualWord = word
    } else {
      if (!this.checkAcert) {
        this.showAlertError("Se te acabo el tiempo")
      }
      this.setCheckAcert(false);
      this.actualWord = word;
    }
  }


  setCheckAcert(bool) {
    this.checkAcert = bool;
  }

  setIsComplete(isComplete) {
    this.isComplete = isComplete;
  }

  //Set Info Text and Show Info Modal

  async initGame() {
    this.getUserToLocalStorage();
    if (this.player) {

      this.view.showPlayerName(`${this.player.nickname}`);
      this.view.showPlayerLevel(this.player.actualLevel);

      await this.setWords();

      await this.showWordsToMemorize();

      if (this.isComplete) {
        this.view.playNextButton.addEventListener('click', this.questionsWords.bind(this))
        this.view.setTitle("Estas listo para jugar?")
        this.view.showNextContinueButton();
        this.view.hidePlayButton();
        this.setIsComplete(false);
      }
    } else {
      this.view.showModalAlias();
    }
  }

  showLabels() {
    this.view.showPlayerLevel(this.player.actualLevel);
    this.view.showPlayerName(this.player.nickname);
    this.view.showScore(this.player.score);
  }
  async getWords(numberOfWordsToMemorize, numberOfWords) {
    return new Promise(async (resolve, reject) => {
      try {
        let wordsToMemorize = [];
        let words = [];

        let response = await fetch("assets/PALBRAS.txt");
        let text = await response.text();

        // Eliminar la última coma si está presente
        if (text.endsWith(',')) {
          text = text.slice(0, -1);
        }

        // Separar las palabras en un array
        const newWords = text.split(',');

        for (let i = 0; i < numberOfWords.sort(() => Math.random() - 0.5); i++) {
          let word = newWords[i];
          words.push(word);
          if (i < numberOfWordsToMemorize) {
            wordsToMemorize.push(word);
          }
        }

        this.wordsToMemorize = new Words(wordsToMemorize.sort(() => Math.random() - 0.5));
        this.words = new Words(words.sort(() => Math.random() - 0.5));

        resolve();
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
        reject(error);
      }
    });
  }

  async setWords() {
    let levelConfig = CONFIG.levels.find(level => level.level === this.player.actualLevel)
    this.level = new Level(levelConfig.wordsToMemorize, levelConfig.words, levelConfig.level, levelConfig.aciertos);
    try {
      await this.getWords(this.level.getWordsToMemorize(), this.level.getLevelWords());
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
    }
  }

  async showWordsToMemorize() {
    this.view.hidePlayButton();
    this.view.hideInfo()
    try {
      await this.view.showWords(this.wordsToMemorize.getWords(), CONFIG.timeToMemorize, this.setActualWord.bind(this), this.setIsComplete.bind(this), false);

    } catch (error) {
      console.error('Error', error);

    }
  }

  async showNormalWords() {
    try {
      this.view.hideNextContinueButton();
      await this.view.showWords(this.words.getWords(), CONFIG.timeToResponse, this.setActualWord.bind(this), this.setIsComplete.bind(this), true);
    } catch (error) {

    }
  }

  async saveUser() {
    const alias = this.view.aliasInput.value;
    this.player = new User(alias);
    localStorage.setItem('user', JSON.stringify(this.player));
    this.view.hideModalAlias();
    await this.setWords();
    this.showWordsToMemorize();
    if (this.isComplete) {
      this.playButton.addEventListener('click', this.questionsWords.bind(this))
      this.view.showPlayButton();
      this.setIsComplete(false);
    }
  }

  showAlertError(alertString) {
    this.view.errorSound.play();
    alert(alertString)
  }

  checkAnswerIfNo() {
    this.setCheckAcert(true)
    let acert = !this.wordsToMemorize.getWords().includes(this.actualWord);
    if (acert) {
      this.view.correctSound.play();
      this.acertNumber += 1;
    } else {
      this.showAlertError('Te has equivocado');
    }
    this.view.showScore(this.acertNumber);
    this.view.hideChooseAcert();
  }



  checkAnswerIfYes() {
    this.setCheckAcert(true)
    let acert = this.wordsToMemorize.getWords().includes(this.actualWord);
    console.log(acert, this.actualWord)
    if (acert) {

      this.view.correctSound.play();
      this.acertNumber += 1;
    } else {
      this.showAlertError('Te has equivocado');
    }
    this.view.showScore(this.acertNumber);
    this.view.hideChooseAcert();
  }

  checIfWin() {
    console.log(this.level.isWinThisLevel(this.acertNumber), this.acertNumber)
    if (this.level.isWinThisLevel(this.acertNumber)) {
      alert('Has ganado');
      this.player.setLevel(this.player.getLevel() + 1);
      this.setUserToLocalStorage();
    } else {
      alert('Has perdido');
    }
    this.outGame();
  }

  async questionsWords() {

    this.view.hideInfo()
    this.view.showScore(this.acertNumber);
    this.view.yesButton.addEventListener('click', this.checkAnswerIfYes.bind(this));
    this.view.noButton.addEventListener('click', this.checkAnswerIfNo.bind(this));

    await this.showNormalWords();
    if (this.isComplete) {
      this.checIfWin();
    }
  }

  showInfoModal() {
    this.view.showInfoModal();

    this.view.showInfoText(CONFIG.infoText[this.indexInfo]);
    this.view.infoButtonContinue.addEventListener('click', this.showInfoText.bind(this));
  }

  showInfoText() {
    if (this.indexInfo < CONFIG.infoText.length - 1) {
      this.indexInfo += 1;
    } else {
      this.indexInfo = 0;
    }
    this.view.showInfoText(CONFIG.infoText[this.indexInfo]);

  }
  outGame = () => {
    document.location.reload();
  }
}



new PlayController()