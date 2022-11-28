const operacion = () => {
  let arrInput = document.getElementsByName("option");
  let titulo = document.getElementById("titulo");
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let btn = document.getElementById("btn");
  let resultado = document.getElementById("resultado");

  for (let i of arrInput) {
    i.onclick = () => {
      i.checked = "checked";
      titulo.innerHTML = `Vamos a hacer la operacion ${i.id}`;
      num1.type = "number";
      num2.type = "number";

      btn.onclick = () => {
        switch (i.id) {
          case "suma":
            resultado.innerHTML = `El resultado es ${num1.value + num2.value}`;
          case "resta":
            resultado.innerHTML = `El resultado es ${num1.value - num2.value}`;
          case "multiplicacion":
            resultado.innerHTML = `El resultado es ${num1.value * num2.value}`;
          case "division":
            resultado.innerHTML = `El resultado es ${num1.value / num2.value}`;
        }
      };
    };

    // btn.onclick = () => {
    //   switch (i.id) {
    //     case "suma":
    //       resultado.innerHTML = `El resultado es ${num1.value + num2.value}`;
    //     case "resta":
    //       resultado.innerHTML = `El resultado es ${num1.value - num2.value}`;
    //     case "multiplicacion":
    //       resultado.innerHTML = `El resultado es ${num1.value * num2.value}`;
    //     case "division":
    //       resultado.innerHTML = `El resultado es ${num1.value / num2.value}`;
    //   }
    // };
  }
};

// const operacion = () => {
//   let titulo = document.getElementById("titulo");
//   console.log(selectedInput().id);

//   titulo.innerHTML = `Vamos a realizar el calculo ${selectedInput().id}`;
// };

operacion();
