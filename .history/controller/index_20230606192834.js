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
      this.view.aliasInput.value = user.alias;
      this.view.aliasInput.disabled = true;
      this.view.playContinueButton.style.display = 'block';
      this.view.playButton.style.display = 'none';
    } else {
      this.view.showModa
    }
    
  }
}