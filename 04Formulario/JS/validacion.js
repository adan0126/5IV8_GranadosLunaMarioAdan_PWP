/*
JavaScript es un lenguaje multiparadigma, lo que significa que soporta varios estilos de programación, incluyendo la programación orientada a objetos (POO), programacion funcional, programacion estructurada, programacion orientada a eventos

Dentro de JS no existe el tipaso de variables: int, string, float, etc

Solo existen 3 tipos de variables: var, let y const
var: tiene un alcance global o de función, y puede ser redeclarada y actualizada
let: tiene un alcance de bloque, y puede ser actualizada pero no redeclarada
const: tiene un alcance de bloque, y no puede ser ni redeclarada ni actualizada
*/

function validarFormulario(formulario) {

    //quiero validar que el campo nombre no este vacio y acepte más de tres caracteres
    if (formulario.nombre.value.trim().length < 4) {
        alert("Por favor ingrese un nombre válido con más de 3 caracteres.");
        formulario.nombre.focus(); // Coloca el foco en el campo nombre
        return false; // Evita que el formulario se envíe
    }

    //quiero validar que SOLO acepte letras (mayusculas y minusculas) y espacios
    const nombrePattern = /^[A-Za-z\s]+$/;
    if (!nombrePattern.test(formulario.nombre.value.trim())) {
        alert("El nombre solo debe contener letras y espacios.");
        formulario.nombre.focus(); // Coloca el foco en el campo nombre
        return false; // Evita que el formulario se envíe
    }

    //quiero validar que acepte SOLO letras (mayusculas y minusculas), espacios, acentos y ñ
    /*const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombrePattern.test(formulario.nombre.value.trim())) {
        alert("El nombre solo debe contener letras, espacios y acentos.");
        formulario.nombre.focus(); // Coloca el foco en el campo nombre
        return false; // Evita que el formulario se envíe
    }*/

    //quiero vlidar que el campo nombre no acepte números
    /*var checkNum = /[0-9]/;
    if (checkNum.test(formulario.nombre.value)) {
        alert("El nombre no debe contener números.");
        formulario.nombre.focus(); // Coloca el foco en el campo nombre
        return false; // Evita que el formulario se envíe
    }*/

    //Para que no acepte acentos y ñ
    /*const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombrePattern.test(formulario.nombre.value.trim())) {
        alert("El nombre no debe contener números ni caracteres especiales.");
        formulario.nombre.focus(); // Coloca el foco en el campo nombre
        return false; // Evita que el formulario se envíe
    }*/

    //quiero validar que el campo edad no este vacio y acepte solo números entre 1 y 90
    const edad = parseInt(formulario.edad.value.trim(), 10);
    if (isNaN(edad) || edad < 1 || edad > 90) {
        alert("Por favor ingrese una edad válida entre 1 y 90.");
        formulario.edad.focus(); // Coloca el foco en el campo edad
        return false; // Evita que el formulario se envíe
    }

    //quiero validar que el campo edad no acepte decimales
    /*if (!Number.isInteger(edad)) {
        alert("La edad debe ser un número entero.");
        formulario.edad.focus(); // Coloca el foco en el campo edad
        return false; // Evita que el formulario se envíe
    }*/

    //quiero validar que el campo edad no acepte letras ni caracteres especiales
    /*const edadPattern = /^[0-9]+$/;
    if (!edadPattern.test(formulario.edad.value.trim())) {
        alert("La edad solo debe contener números.");
        formulario.edad.focus(); // Coloca el foco en el campo edad
        return false; // Evita que el formulario se envíe
    }*/

    //quiero validar que el campo email no este vacio y acepte un formato de correo válido
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formulario.email.value.trim())) {
        alert("Por favor ingrese un correo electrónico válido.");
        formulario.email.focus(); // Coloca el foco en el campo email
        return false; // Evita que el formulario se envíe
    }
}