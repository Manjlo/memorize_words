// creamos las variables para el modal y el boton
var modal = document.getElementById("id_info_modal");
var button = document.getElementById("id_info");

// creamos una funcion que por medio del click del boton, muestre el modal
button.onclick = function() {
    modal.classList.toggle("show");
}

