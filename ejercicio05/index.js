const operacion = () => {
  let arrInput = document.getElementsByName("option");

  for (let i of arrInput) {
    i.onclick = () => {
      let titulo = document.getElementById("titulo");
      let num1 = document.getElementById("num1");
      let num2 = document.getElementById("num2");
      let resultado = document.getElementById("resultado");
      console.log(i);
      console.log(num1);

      titulo.innerHTML = `Vamos a hacer la operacion ${i.id}`;
      num1.type = "number";
      num2.type = "number";

      switch (i.id) {
        case "suma":
          resultado.innerHTML = `su resultado es ${num1.value + num2.value}`;
      }
    };
  }
};

// const operacion = () => {
//   let titulo = document.getElementById("titulo");
//   console.log(selectedInput().id);

//   titulo.innerHTML = `Vamos a realizar el calculo ${selectedInput().id}`;
// };

operacion();
