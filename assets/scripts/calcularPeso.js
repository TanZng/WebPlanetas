
var op = document.getElementById("planetOp");
var peso = document.getElementById("w");
var unit = document.getElementById("massUnits")
var boton = document.getElementById("botoncito");

boton.addEventListener("click", calcularPeso);

function verify()
{
	if ( peso.value == "" && planetOp.value == "")
		alert("Introduzca su peso y seleccione un planeta");

}

function calcularPeso()
{
	x = (parseFloat(peso.value)/9.81) * parseFloat(op.value)
	document.getElementById("result").innerHTML = x; // ver resultado en el html
}
