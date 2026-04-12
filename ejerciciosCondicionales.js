//1.  Declara edad = 17. Escribe un if que verifique si es mayor o igual a 18.
// Si se cumple muestra "Puedes entrar", si no "Quédate en casa"

let edad = 17;

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("Quédate en casa");
}

//2. Si el clima es mayor a 30, muestra "Hace calor", de lo contrario muestra "Está fresco"

let clima = 32;

if (clima > 30) {
  console.log("Hace calor");
} else {
  console.log("Está fresco");
}

//3. Crea:

// passwordDigitada = "1234"
// passwordReal = "admin"
// Si son iguales muestra "Acceso concedido", si no "Error de clave".


let passwordDigitada = "1234";
let passwordReal = "admin";

if (passwordDigitada === passwordReal) {
  console.log("Acceso concedido");
} else {
  console.log("Error de clave");
}

//4. Declara numero = 7.
// Usa el operador módulo %.
// Si numero % 2 === 0 muestra "Es par", si no "Es impar"

let numero = 7;

if (numero % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

//5. Si compra = 100.
// Si la compra es mayor a 80, se le descuenta 20.
// Si no, no se descuenta nada.
// Mostrar el total final

let compra = 100;
let total = compra;

if (compra > 80) {
  total = compra - 20;
}

console.log("Total a pagar:", total);

//6. Variable color = "verde" y hayPeatones = true.

// Si el color es "verde":

// Si hay peatones → "Espera un momento"
// Si no hay peatones → "Sigue adelante"

// Si no es verde → "Detente"

let color = "verde";
let hayPeatones = true;

if (color === "verde") {
  if (hayPeatones) {
    console.log("Espera un momento");
  } else {
    console.log("Sigue adelante");
  }
} else {
  console.log("Detente");
}


//7. Variable nota = 85.

// Si la nota es mayor o igual a 60:
// Si es mayor a 90 → "Excelente"
// Si no → "Aprobado"
// Si es menor a 60 → "Reprobado"


let nota = 85;

if (nota >= 60) {
  if (nota > 90) {
    console.log("Excelente");
  } else {
    console.log("Aprobado");
  }
} else {
  console.log("Reprobado");
}


//8. Variables:

// esDeNoche = true
// movimientoDetectado = false

// Reglas:

// Si es de noche:
// Si hay movimiento → "Encender luces"
// Si no hay movimiento → "Luces en modo ahorro"
// Si no es de noche → "Luces apagadas"


let esDeNoche = true;
let movimientoDetectado = false;

if (esDeNoche) {
  if (movimientoDetectado) {
    console.log("Encender luces");
  } else {
    console.log("Luces en modo ahorro");
  }
} else {
  console.log("Luces apagadas");
}

// 9. Variables: saldo = 500, montoRetiro = 600.

// Si el retiro es menor o igual al saldo → "Retiro exitoso"
// Si no:
// Si es mayor a 1000 → "Límite diario excedido"
// Si no → "Saldo insuficiente"

let saldo = 500;
let montoRetiro = 600;

if (montoRetiro <= saldo) {
  console.log("Retiro exitoso");
} else {
  if (montoRetiro > 1000) {
    console.log("Límite diario excedido");
  } else {
    console.log("Saldo insuficiente");
  }
}


// 10. Variables:

// distancia = 15
// tengoBici = false

// Reglas:

// Si distancia < 5 → "Camina"
// Si no:
// Si tiene bici → "Ve en bici"
// Si no → "Toma el bus"


let distancia = 15;
let tengoBici = false;

if (distancia < 5) {
  console.log("Camina");
} else {
  if (tengoBici) {
    console.log("Ve en bici");
  } else {
    console.log("Toma el bus");
  }
}



