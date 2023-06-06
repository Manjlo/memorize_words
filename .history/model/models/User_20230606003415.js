class User {
  constructor(nickname) {
    this.nickname = nickname;
    this.actualLevel = 1;
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

export default User;