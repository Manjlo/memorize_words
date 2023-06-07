import { Level, User, Words } from "../model/index.js";
import PlayView from "../view/index.js";
import CONFIG from "./utils.js";

console.log("run");

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
    console.log(this.view);
    this.view.playButton.addEventListener('click', this.initGame.bind(this));
    this.view.playContinueButton.addEventListener('click', this.saveUser.bind(this));

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
    this.actualWord = word;
  }

  setIsComplete(isComplete) {
    this.isComplete = isComplete;
  }

  //Set Info Text and Show Info Modal

  initGame() {
    this.getUserToLocalStorage();
    if (this.player) {
      this.setWords();
      this.showWordsToMemorize();
      if (isComplete) {
        this.playButton.addEventListener('click', this.questionsWords.bind(this))
        this.view.showPlayButton();
        this.setIsComplete(false);
      }
    } else {
      this.view.showModalAlias();
    }
  }

  getWords(numberOfWordsToMemorize, numberOfWords) {
    let wordsToMemorize = [];
    let words = [];
    fetch("assets/PALBRAS.txt").then(response => response.text()).then(words => {
      console.log(words);

      for (let i = 0; i < numberOfWords; i++) {
        let word = words[i];
        words.push(word);
        if (i < numberOfWordsToMemorize) {
          wordsToMemorize.push(word);
        }
      }

    })

    this.wordsToMemorize = new Words(wordsToMemorize);
    this.words = new Words(words);

  }

  setWords() {
    let levelConfig = CONFIG.levels.find(level => level.level === this.player.actualLevel)
    this.level = new Level(levelConfig.wordsToMemorize, levelConfig.words, levelConfig.level, levelConfig.aciertos);
    this.getWords(this.level.getWordsToMemorize(), this.level.getLevelWords());
  }

  showWordsToMemorize() {
    this.view.showWords(this.wordsToMemorize, this.setActualWord, this.setIsComplete, false);
  }

  showNormalWords() {
    this.view.showWords(this.words, this.setActualWord, this.setIsComplete, true);
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
      this.setIsComplete(false);
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

  checIfWin() {
    if (this.level.isWinThisLevel(this.acertNumber)) {
      this.player.setLevel(this.player.getLevel() + 1);
      this.setUserToLocalStorage();
      this.initGame();
    } else {
      this.initGame();
    }
  }

  questionsWords() {
    let isComplete = this.view.showWords(this.words);
    this.view.yesButton.addEventListener('click', this.checkAnswerIfYes.bind(this));
    this.view.noButton.addEventListener('click', this.checkAnswerIfNo.bind(this));
    this.showNormalWords();
    if (isComplete) {
      this.checIfWin();
    }
  }
}



new PlayController(new PlayView())