const mate = {};
function suma(a, b) {
    return a + b;
  }
  function resta(a, b) {
    return a - b;
  }
  function multiplicacion(a, b) {
    return a * b;
  }
  function division(a, b) {
    if (b === 0) {
      return "Error: No se puede dividir por cero";
    } else {
      return a / b;
    }
  }
  /*
  console.log("Suma:", suma(5, 3)); // Muestra: Suma: 8
  console.log("Resta:", resta(10, 4)); // Muestra: Resta: 6
  console.log("Multiplicación:", multiplicacion(5, 2)); // Muestra: Multiplicación: 10
  console.log("División:", division(15, 3)); // Muestra: División: 5
  console.log("División por cero:", division(10, 0)); // Muestra: Error: No se puede dividir por cero
  */

  mate.suma=suma
  mate.resta=resta
  mate.multiplicacion=multiplicacion
  mate.division=division
  module.exports=mate;