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
/*
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
*/

// Problema 1

function validarP1(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
} 

function calcularP1() {
    let x = parseInt(document.getElementById('p1-x').value);
    let y = parseInt(document.getElementById('p1-y').value);
    let resultado = x === y ? x * y : x > y ? x - y : x + y;
    document.getElementById('p1-output').value = resultado;
    alert("El resultado es: " + resultado);
}

function borrarP1() {
    ['p1-x', 'p1-y', 'p1-output'].forEach( id => document.getElementById(id).value = '' );
}

// Problema 2

function validarP2(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
} 

function calcularP2() {
    let n1 = parseInt(document.getElementById('p2-n1').value);
    let n2 = parseInt(document.getElementById('p2-n2').value);
    let n3 = parseInt(document.getElementById('p2-n3').value);
    if (n1 === n2 || n1 === n3 || n2 === n3) {
        document.getElementById('p2-output').value = "No hay número mayor";
        alert("Los números deben ser distintos");
    } else {
        const mayor = Math.max(n1, n2, n3);
        document.getElementById('p2-output').value = mayor + " es el mayor";
        alert(mayor + " es el mayor");
    }
}

function borrarP2() {
    ['p2-n1', 'p2-n2', 'p2-n3', 'p2-output'].forEach ( id => document.getElementById(id).value = '' )
}

// Problema 3

function validarsalP3(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validarhrsP3(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcularP3() {
    const sueldo = parseFloat(document.getElementById('p3-s').value);
    const horas = parseInt(document.getElementById('p3-h').value);
    const final = horas <= 8 ? horas * (sueldo * 2) : ((horas - 8) * sueldo * 3) + (sueldo * 16);
    document.getElementById('p3-output').value = final.toFixed(2);
    alert("Su salario por horas extra es: " + final.toFixed(2));
}

function borrarP3() {
    ['p3-s', 'p3-h', 'p3-output'].forEach( id => document.getElementById(id).value = '' )
}

// Problema 4

function validarsalP4(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validaranioP4(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcularP4() {
    let sueldo = parseFloat(document.getElementById('p4-s').value);
    let anio = parseInt(document.getElementById('p4-a').value)
    let final = 0;

    /*
    const rates = {
        0: 0.05,
        1: 0.07,
        '2-4': 0.1,
        '5-9': 0.15
    };
    final = sueldo * (rates[anio] || rates[`${Math.min(9, Math.max(2, anio))}-${Math.min(9, Math.max(2, anio))}`] || 0.2);
    */

    if ( anio < 1 ) {
        final = sueldo * 0.05;
    } else if ( anio == 1 ) {
        final = sueldo * 0.07;
    } else if ( anio >= 2 && anio < 5) {
        final = sueldo * 0.1;
    } else if ( anio >= 5 && anio < 10 ) {
        final = sueldo * 0.15;
    } else {
        final = sueldo * 0.2;
    }
    document.getElementById('p4-output').value = final.toFixed(2);
    alert("Sus utilidades son de: $" + final.toFixed(2))
}

function borrarP4() {
    ['p4-s', 'p4-a', 'p4-output'].forEach ( id => document.getElementById(id).value = '' )
}