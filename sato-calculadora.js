var visor = document.getElementById("visor");

var numero1 = "";
var numero2 = "";
var operador;
var resultado = "";

function cambiarValor(numeroSeleccionado) {
  if (!numero1) {
    visor.innerHTML = "";
  }
  if (operador) {
    numero2 += numeroSeleccionado;
  } else numero1 += numeroSeleccionado;

  visor.innerHTML += numeroSeleccionado;
  console.log("numero1: ", numero1);
  console.log("numero2: ", numero2);
}

function agregarOperador(operadorSeleccionado) {
  if(!operador){
  operador = operadorSeleccionado;
  console.log("operador: ", operador);
  visor.innerHTML += `${operadorSeleccionado}`;
  }
}

function calcular() {
  switch (operador) {
    case "+":
      resultado = Number(numero1) + Number(numero2);
      console.log("resultado: ", resultado);
      break;

    case "-":
      resultado = Number(numero1) - Number(numero2);
      console.log("resultado: ", resultado);
      break;

    case "*":
      resultado = Number(numero1) * Number(numero2);
      console.log("resultado: ", resultado);
      break;
    case "/":
      resultado = Number(numero1) / Number(numero2);
      console.log("resultado: ", resultado);
      break;
  }
  visor.innerHTML += ` = ${resultado}`;
  limpiarVariabes();
}

function limpiarVariabes() {
  numero1 = "";
  numero2 = "";
  operador = "";
}
function limpiarTodo(){
limpiarVariabes();
visor.innerHTML="";
}
