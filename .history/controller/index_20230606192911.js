import PlayView from "../view";


class PlayController {
  constructor(view) {
    this.view = new PlayView()
    this.player = null;

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
}