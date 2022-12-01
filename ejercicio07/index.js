// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación solicite números al usuario hasta que la suma de los números introducidos supere el límite inicial.

let limitInput = document.getElementById("limitInput");
let limitButton = document.getElementById("limitButton");
let label = document.getElementById("label");
let input = document.getElementById("input");
let button = document.getElementById("button");

limitButton.onclick = () => {
  let limitValue = limitInput.value;
  console.log(limitValue);

  label.hidden = "";
  input.hidden = "";
  button.hidden = "";
};
