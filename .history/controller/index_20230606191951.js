
class PlayController {
  constructor(view) {
    this.view = view;
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
    
  }
}