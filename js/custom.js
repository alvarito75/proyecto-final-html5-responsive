var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
console.log('hiiii');
function MenuDesplegable() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}