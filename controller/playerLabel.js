const button = document.querySelector('#id_continue');
const input = document.querySelector('#alias');
const output = document.querySelector('#id_playerLabel');

button.addEventListener('click', () => {
    const playerName = input.value;
    output.textContent = 'Jugador: '+ playerName;
});