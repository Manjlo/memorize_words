import { Level, User, Word } from "../model/index.js";
import Words from "../model/models/Word.js";
import PlayView from "../view/index.js";
import CONFIG from "./utils.js";



class PlayController {
  constructor(view) {
    this.view = new PlayView()
    this.player = null;
    this.level = null;
    this.wordsToMemorize = null;
    this.words = null;
    this.actualWord = null;
    this.acertNumber = 0;
    this.isComplete = false;


    this.view.playButton.addEventListener('click', this.initGame.bind(this));
    this.view.playContinueButton.addEventListener('click', this.saveUser.bind(this));

  }
  //Get User from Local Storage
  getUserToLocalStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.player = new User(user.nickname);
      this.player.setLevel(user.actualLevel);
    }
  }

  //Save User in Local Storage
  setUserToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.player));
  }

  setActualWord(word) {
    this.actualWord = word;
  }

  setIsComplete(isComplete) {
    this.isComplete = isComplete;
  }

  //Set Info Text and Show Info Modal
  
  initGame() {
    this.getUserToLocalStorage();
    if (this.player) {
      this.view.showWords(user.words);
    } else {
      this.view.showModalAlias();
    }
  }

  getWords(numberOfWordsToMemorize, numberOfWords) {

    this.words = new Words(wordsFromObject)
  }

  setWords() {
    let levelConfig = CONFIG.levels.find(level => level.level === this.player.actualLevel)
    this.level = new Level(levelConfig.wordsToMemorize, levelConfig.words, levelConfig.level, levelConfig.aciertos);
    this.getWords(this.level.getWordsToMemorize(), this.level.getWords());  
  }

  showWordsToMemorize() {
    this.view.showWords(this.wordsToMemorize, this.setActualWord, this.setIsComplete);
  }


  saveUser() {
    const alias = this.view.aliasInput.value;
    this.player = new User(alias);
    localStorage.setItem('user', JSON.stringify(this.player));
    this.view.hideModalAlias();
    this.setWords();
    this.showWordsToMemorize();
    if (isComplete) {
      this.playButton.addEventListener('click', this.questionsWords.bind(this))
      this.view.showPlayButton();
    }
  }

  checkAnswerIfNo() {
    let acert = !this.wordsToMemorize.includes(this.actualWord);
    if (acert) {
      this.acertNumber += 1;
    }
  }

  checkAnswerIfYes() {
    let acert = this.wordsToMemorize.includes(this.actualWord);
    if (acert) {
      this.acertNumber += 1;
    }
  }

  questionsWords() {
    let isComplete = this.view.showWords(this.words);
    this.view.yesButton.addEventListener('click', this.checkAnswerIfYes.bind(this));
    this.view.noButton.addEventListener('click', this.checkAnswerIfNo.bind(this));
    this.view.showChooseAcert();
    if (isComplete) {
      this.view.showPlayButton();
    }
  }
}