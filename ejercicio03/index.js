// Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de edad se debe mostrar un mensaje indicándolo.

const edad = () => {
  let result = document.getElementById("result");
  let input = document.getElementById("ageInput");
  let btn = document.getElementById("btn");

  btn.onclick = () => {
    input.value > 18
      ? (result.innerHTML = "Es mayor de edad")
      : (result.innerHTML = "Es menor de edad");
  };
};

edad();
