// Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.

const exercise = () => {
  let result = document.getElementById("result");
  let input = document.getElementById("input");
  let button = document.getElementById("btn");

  button.onclick = () => {
    result.innerHTML = `El dia de hoy se encuentra ${input.value}`;
  };
};

exercise();
