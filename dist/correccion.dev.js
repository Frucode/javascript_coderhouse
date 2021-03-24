"use strict";

var precio;
var total;

function Precio() {
  precio = parseInt(prompt("¿Cuanto vas a gastar hoy, papito?"));

  if (precio == 1) {
    alert("ANdÁ A LABURAR, PEBETE!");
  } else {
    total = precio * 1.19;
  }
}

function papiFisco() {
  if (precio > 100) {
    alert("Vas a pagar " + precio + " si vivieras en una utopia, pero como no es así, debes sumar la comisión de papi fisco, por lo que lo que vas a pagar es: " + total);
  } else {
    alert("Vas a pagar " + precio + " si vivieras en una utopia, pero como no es así, debes sumar la comisión de papi fisco, por lo que lo que vas a pagar es: ¡UNA MISERIA ANDA A LA BURAR!");
  }
}

do {
  Precio();

  if (precio >= 1) {
    papiFisco();
  } else {
    alert(wakanda());
    break;
  }
} while (precio >= 1);

function wakanda() {
  return "No hacemos eso aquí 🐱‍👤";
}