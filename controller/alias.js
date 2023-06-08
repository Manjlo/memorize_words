// Definimos las variables que vamos a utilizar y las igualamos a los elementos del DOM que nos interesan, en este caso los id
let modal = document.getElementById("id_modalAlias");
let playButton = document.getElementById("id_play");
let continueButton = document.getElementById("id_continue");
let oldDiv = document.getElementById("id_title");
let newDiv = document.getElementById("id_wordsContainer");
let infoDiv = document.getElementById("id_info");
let aliasInput = document.getElementById("alias");
let closeButton = document.querySelector("#id_closeButton");
let player = document.querySelector("#id_playerLabel");
let level = document.querySelector("#id_playerLevel");
let score = document.querySelector("#id_score");

// definimos un arreglo vacio donde se guardará el alias del jugador
let aliasArray = [];

// Definimos los eventos que se van a ejecutar cuando se haga click en los botones
playButton.onclick = function() {
    modal.style.display = "block";
}

continueButton.onclick = function() {
    let aliasValue = aliasInput.value;
    aliasArray.push(aliasValue);
    modal.style.display = "none";
    oldDiv.remove();
    infoDiv.remove();
    playButton.remove();
    newDiv.classList.remove("wordsContainer");
    closeButton.classList.remove("closeButton");
    closeButton.classList.add("closeButton2");
    player.classList.remove("playerLabel");
    player.classList.add("playerLabel2");
    level.classList.remove("playerLevel");
    level.classList.add("playerLevel2");
    score.classList.remove("score");
    score.classList.add("score2");
}

// mostramos el array en consola para comprobar que se ha guardado correctamente
