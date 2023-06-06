class User {
  constructor(nickname) {
    this.nickname = nickname;
    this.level = 1;
  }
  setLevel(level) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }

  getNickname() {
    return this.nickname;
  }
}
