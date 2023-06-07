import { Level, User, Word } from "../model/index.js";
import Words from "../model/models/Word.js";
import PlayView from "../view/index.js";
import CONFIG from "./utils.js";



class PlayController {
  constructor(view) {
    this.view = new PlayView()
    this.player = null;
    this.level = null;
    this.words = null;
    this.actualWord = null;


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

  //Set Info Text and Show Info Modal
  
  initGame() {
    this.getUserToLocalStorage();
    if (user) {
      this.view.showWords(user.words);
    } else {
      this.view.showModalAlias();
    }
  }

  getWords(numberOfWords) {

    this.words = new Words(wordsFromObject)
  }

  saveUser() {
    const alias = this.view.aliasInput.value;
    this.player = new User(alias);
    localStorage.setItem('user', JSON.stringify(user));
    this.view.hideModalAlias();
    let levelConfig = CONFIG.levels.find(level => level.level === this.player.actualLevel)
    this.level = new Level(levelConfig.wordsToMemorize, levelConfig.words, levelConfig.level, levelConfig.aciertos);
    this.getWords(this.level.getWordsToMemorize());
    let isComplete = this.view.showWords(user.words);
    if (isComplete) {
      this.playButton.addEventListener('click',)
      this.view.showPlayButton();
    }
  }

  checkAnswerIfNo() {

  }

  checkAnswerIfYes() {
  }

  questionsWords() {
    this.view.showWords(this.words);
    this.view.yesButton.addEventListener('click', this.checkAnswerIfYes.bind(this));
    this.view.noButton.addEventListener('click', this.checkAnswerIfNo.bind(this));
    this.view.showChooseAcert();

  }
}