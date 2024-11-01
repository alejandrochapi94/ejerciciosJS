//Archivo principal main (No es un módulo)

import * as Operations from './operaciones.js';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const divResultado = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorSelect.value;

  let result;

  switch (operator) {
    case 'suma':
      //No es necesario crear una instanacia de la clase
      result = Operations.Suma.operate(num1, num2);
      break;
    case 'resta':
      result = Operations.Resta.operate(num1, num2);
      break;
    case 'multiplicacion':
      result = Operations.Multiplicacion.operate(num1, num2);
      break;
    case 'division':
      result = Operations.Division.operate(num1, num2);
      break;
    default:
      result = "Operador inválido";
  }

  divResultado.textContent = result;
});
