var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
function MenuDesplegable() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}