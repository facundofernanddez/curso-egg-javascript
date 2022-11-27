// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

const PI = 3.14;

const area = () => {
  let input = document.getElementById("areaInput");
  let btn = document.getElementById("areaBtn");
  let result = document.getElementById("resultArea");

  btn.onclick = () => {
    result.innerHTML = `El calculo del area es: ${PI * input.value ** 2}`;
  };
};

area();

const perimetro = () => {
  let input = document.getElementById("perInput");
  let btn = document.getElementById("perBtn");
  let result = document.getElementById("resultPer");

  btn.onclick = () => {
    result.innerHTML = `El calculo del perimetro es: ${2 * PI * input.value}`;
  };
};

perimetro();
