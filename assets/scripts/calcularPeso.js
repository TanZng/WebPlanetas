
var op = document.getElementById("planetOp");
var peso = document.getElementById("w");
var unit = document.getElementById("massUnits")
var boton = document.getElementById("botoncito");

boton.addEventListener("click", verify);

function verify()
{ //Verifica que el usuario seleccione un planeta e introduzca su peso
	if ( peso.value == "" || planetOp.value == "")
		alert("Introduzca su peso y seleccione un planeta");
	else
	{
		calcularPeso();
	}

}

function calcularPeso()
{
	x = (parseFloat(peso.value)/9.81) * parseFloat(op.value)
	document.getElementById("result").innerHTML = "Su peso es " + x; // ver resultado en el html
}
