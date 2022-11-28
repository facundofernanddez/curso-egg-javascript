// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

let result = document.getElementById("result");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.onclick = () => {
  let value = input.value;

  if (value == 0) {
    result.innerHTML = "El numero no es impar ni par";
  } else if (value % 2 == 0 && value != 0) {
    result.innerHTML = "El numero es par";
  } else if (value % 2 != 0 && value != 0) {
    result.innerHTML = "El numero es impar";
  }
};
