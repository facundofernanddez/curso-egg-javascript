let boton = document.querySelector(".boton");
let input = document.querySelector(".input");
let result = document.getElementById("result");

boton.onclick = () => {
  let value = input.value.toString().toUpperCase();
  if (value === "S" || value === "N") {
    result.innerHTML = "CORRECTO!";
  } else {
    result.innerHTML = "INCORRECTO!";
  }
};
