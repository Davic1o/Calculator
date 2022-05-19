
console.group("Cuadrados");
function perimetroCuadrado(lado) {
 var int = lado 
  return Number(lado) + Number(lado)+Number(lado) + Number(lado);
}
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();
// CÃ³digo del triÃ¡ngulo
console.group("TriÃ¡ngulos");
function perimetroTriangulo(lado1, lado2, lado3) {
  return Number(lado1) + Number(lado2)+Number(lado3);
}
function areaTriangulo(lado1, lado2, angulo) {
  const x= angulo * (PI/180);
const A = (lado1 * lado2 * Math.sin(x)) / 2;
const AR = A.toFixed(3) 
  return AR;
}
console.log("El Ã¡rea del triÃ¡ngulo es: " + areaTriangulo + "cmË†2");
console.groupEnd();
// CÃ³digo del cÃ­rculo
console.group("CÃ­rculos");
function diametroCirculo(radio) {
  return radio * 2;
}
const PI = Math.PI;
console.log("PI es: " + PI);
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  const A = diametro * PI;
  const AR = A.toFixed(3) 
  return AR;
}
function areaCirculo(radio) {
  const A = (radio * radio) * PI;
  const AR = A.toFixed(3) 
  return AR;
}
console.groupEnd();
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro)
}
function calcularAreacuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
  }
  function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const perimetroT = perimetroTriangulo(value1 , value2 , value3);
    alert(perimetroT)
  }
  function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("Angulo");
    const value3 = input3.value;
      const area = areaTriangulo(value1 , value2 , value3);
      alert(area)
    }
  function calcularPerimetroCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const value1 = input1.value;
    const Perimetro =perimetroCirculo(value1);
    alert(Perimetro)
  }
  function calcularAreaCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const value1 = input1.value;
    const Area = areaCirculo(value1);
    alert(Area)
  }

