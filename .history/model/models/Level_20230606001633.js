class Level {
  constructor(wordsToMemorize, levelWords, levelNumber, acertsNumber) {
    this.wordsToMemorize = wordsToMemorize;
    this.levelWords = levelWords;
    this.levelNumber = levelNumber;
    this.acertsNumber = acertsNumber;
  }

  getWordsToMemorize() {
    return this.wordsToMemorize;
  }

  getLevelWords() {
    return this.levelWords;
  }

  getLevelNumber() {
    return this.levelNumber;
  }

  getAcertsNumber() {
    return this.acertsNumber;
  }

  setAcertsNumber(acertsNumber) {
    this.acertsNumber = acertsNumber;
  }

  thisIsWordToMemorize(word) {
    return this.wordsToMemorize.includes(word);
  }

  isWinThisLevel(numberAcerts) {
    return numberAcerts >= this.acertsNumber;
  }
}