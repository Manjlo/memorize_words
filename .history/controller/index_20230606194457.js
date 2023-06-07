import { User } from "../model/index.js";
import PlayView from "../view.js";
import CONFIG from "./utils.js";



class PlayController {
  constructor(view) {
    this.view = new PlayView()
    this.player = null;

    this.view.playButton.addEventListener('click', this.initGame.bind(this));
    this.view.playContinueButton.addEventListener('click', this.saveUser.bind(this));

  }
  getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  //Set Info Text and Show Info Modal
  
  initGame() {
    let user = this.getUser();
    if (user) {
      this.view.showWords(user.words);
    } else {
      this.view.showModalAlias();
    }
  }

  saveUser() {
    const alias = this.view.aliasInput.value;
    this.player = new Player(alias);
    localStorage.setItem('user', JSON.stringify(user));
    this.view.hideModalAlias();
    this.view.showWords(user.words);
  }
}