class User {
  constructor(nickname) {
    this.nickname = nickname;
    this.actualLevel = 1;
  }
  setLevel(level) {
    this.actualLevel = level;
  }

  getLevel() {
    return this.actualLevel;
  }

  getNickname() {
    return this.nickname;
  }
}

export default User;