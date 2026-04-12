// 1. Calculadora de propinas:

//Declara una variable cuenta con el valor 150 y una variable propina con el 10% de esa cuenta.
//¿Cuál es el resultado de sumar ambas en una nueva variable total?

let cuenta = 150
let propina = cuenta * 0.10;
let total = cuenta + propina;

console.log("Total a pagar:", total);

// 2. Concatenación de nombres:
// Tienes nombre = "EjemploNataly" y apellido = "EjemploReyes". Crea una variable nombreCompleto que los una con un espacio en medio. 
//¿Qué tipo de dato es el resultado?

let nombre = "Nataly";
let apellido = "Reyes";
let nombreCompleto = nombre + " " + apellido;

console.log("Nombre completo:", nombreCompleto);
console.log("Tipo de dato:", typeof nombreCompleto);

//3. El contador:
//Si declaras let puntos = 10; y luego haces puntos = puntos + 5; y después puntos = puntos - 2;. 
// ¿Cuál es el valor final de puntos?

let puntos = 10;
puntos = puntos + 5 
puntos = puntos - 2 

console.log("Resultado de puntos:", puntos);

//4. Conversor de años a días:
//Declara una variable edad con tu edad actual. Calcula cuántos días has vivido aproximadamente
// (multiplicando por 365) y guarda el resultado en totalDias.


let edad = 37;
let totalDias = 37 * 365;

console.log("Dias que he vivido aproximadamente:", totalDias);

//5. Resto de una división:
//Si tenemos let galletas = 17; y let amigos = 3;. Usa el operador de módulo (%) 
//para encontrar cuántas galletas sobran si las repartes equitativamente.


let galletas = 17
let amigos = 3 
let resto = galletas % amigos;

console.log("Galletas que sobran:", resto);


// 6.Bloque 2: Modo Intermedio (Lógica y Coerción)
// El examen de lógica:
// Determina el valor booleano (true o false) de la siguiente operación:
// let resultado = (10 > 5) && (3 < 1);

let resultado = (10 > 5) && (3 < 1);

console.log("Resultado:", resultado);

//7. Comparación con truco:
// ¿Cuál es el resultado lógico de comparar un número y un string con el mismo contenido?
// let comparacion = (20 == "20"); y let comparacionEstricta = (20 === "20");


let comparacion = (20 == "20");
let comparacionEstricta = (20 === "20");

console.log("== :", comparacion);
console.log("=== :", comparacionEstricta);

//8. Prioridad de operadores:
// Resuelve en papel siguiendo el orden de importancia (paréntesis primero, luego multiplicación):
// let operacion = 10 + 5 * 2 / (4 - 2);

let operacion = 10 + 5 * 2 / (4 - 2);

console.log("Resultado", operacion);


//9. Doble negación y OR:
// ¿Cuál es el valor de esVerdadero?
// let esVerdadero = !false || (false && true);

let esVerdadero = !false || (false && true);

console.log("Resultado ejercicio 9:", esVerdadero);

// 10. Mezcla de tipos (Coerción):
// JavaScript a veces suma cosas raras. ¿Qué crees que guardan estas variables?
// let a = "5" + 2;
// let b = "5" - 2; ¿Cómo practicarlos?
// Al lado, escribe "Memoria" y dibuja qué valor tiene cada variable en cada paso.
// Intenta adivinar el console.log() final antes de pasarlo a la computadora.

let a = "5" + 2;
let b = "5" - 2;

console.log("Resultado a:", a);
console.log("Resultado b:", b);





