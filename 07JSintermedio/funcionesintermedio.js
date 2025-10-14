/*
JavaScript maneja variables del siguiente modo:

var: una variable de acceso local y global dependiendo de donde se declare
let: una variable "protegida", solo se puede acceder a ella dentro del bloque donde se declara
const: una variable que no puede cambiar su valor, es una constante

var x = "hola"; // variable global

if (true) {
    let x = "habia una vez"; // variable protegida
    console.log(x); // habia una vez
}


function suma (n1, n2) {
    return n1 + n2;
}
console.log(suma(2,3)); // 5


// Las funciones flecha, nos ayudan a escribir funciones de una manera más corta y concisa. De a cuerdo a la siguiente estructura podemos definirlas:
// cadena: id, clase, metodo, nombre, atributo

// Función anónima
const suma = (n1, n2) => n1 + n2;
console.log(suma(2,3)); // 5
*/

const razasPerros = [
    "Pastor Alemán",
    "Labrador Retriever",
    "Bulldog Francés",
    "Beagle",
    "Poodle",
    "Chihuahua",
    "Golden Retriever",
    "Dalmata"
]

// formas para recorrer un array

// 1. for tradicional
for (let i = 0; i < razasPerros.length; i++) {
    console.log(razasPerros[i]);
}

// 2. for...of
for (const raza of razasPerros) {
    console.log(raza);
}

// 3. for...in
for (let indice in razasPerros) {
    console.log(razasPerros[indice]);
}

// 4. forEach: itera sobre los elementos de un array y ejecuta una función callback para cada elemento.
// No retorna un nuevo array.
// Los forEach no pueden ser interrumpidos con break o continue.
// Los forEach son funciones flecha por defecto.
// La estructura es: argumento.forEach((elemento, indice, arregloOriginal) => { ... })
razasPerros.forEach(raza => console.log(raza));

// 5. map: itera sobre los elementos de un array y ejecuta una función callback para cada elemento.
// Retorna un nuevo array con los resultados de la función callback.
// La estructura es: argumento.map((elemento, indice, arregloOriginal) => { ... })
const razasEnMayusculas = razasPerros.map(raza => raza.toUpperCase());
console.log(razasEnMayusculas);

// 6. find: busca un elemento en el array que cumpla con una condición y retorna el primer elemento que la cumple.
// Si no encuentra ningún elemento que cumpla con la condición, retorna undefined.
// La estructura es: argumento.find((elemento, indice, arregloOriginal) => { ... })
const razaBuscada = razasPerros.find(raza => raza === "Beagle");
console.log(razaBuscada); // Beagle

// 7. findIndex: busca un elemento en el array que cumpla con una condición y retorna el índice del primer elemento que la cumple.
// Si no encuentra ningún elemento que cumpla con la condición, retorna -1.
// La estructura es: argumento.findIndex((elemento, indice, arregloOriginal) => { ... })
const indiceRazaBuscada = razasPerros.findIndex(raza => raza === "Beagle");
console.log(indiceRazaBuscada); // 3