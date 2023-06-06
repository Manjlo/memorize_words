/*
<body>
    <div class="root" id="id_root">
        <div class="infoModal" id="id_info_modal">
            <div class="divTextInfo" id="id_divTextInfo"></div>
            <button class="infoButton" id="id_infoButton">Continuar</button>
        </div>
        <div class="info" id="id_info"></div>
        <div class="playButton">
            <button class="play" id="id_play">JUGAR</button>
        </div>
        <div class="title" id="id_title">I KNOW THAT WORD!</div>
        <div class="modalAlias" id="id_modalAlias">
            <div class="content">
                <label for="alias">ALIAS:</label>
                <input type="text" id="alias" name="alias">
                <button id="id_continue">Continua a jugar</button>
            </div>
        </div>
        <div class="wordsContainer" id="id_wordsContainer">
            <div class="words" id="id_words"></div>
            <div class="choose" id="id_choose">
                <button id="id_yes">SI</button>
                <button id="id_no">NO</button>
            </div>
        </div>
    </div> */
</body>
</html>
class PlayView {
  constructor() {
    this.playButton = document.getElementById('play-button');
    this.aliasInput = document.getElementById('alias-input');
    this.playContinueButton = document.getElementById('play-continue-button');
    this.wordsContainer = document.getElementById('words-container');
    this.yesButton = document.getElementById('yes-button');
    this.noButton = document.getElementById('no-button');
    this.infoContainer = document.getElementById('info-container');
    this.infoText = document.getElementById('info-text');
    this.outButton = document.getElementById('out-button');
  }
}