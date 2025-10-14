function evento1(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[A-Za-z ]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function resolverProblema1() {
    // Problema 1: Invertir el orden de una serie de palabras
    const input = document.getElementById('p1-input').value;
    const palabras = input.split(' ');
    const palabrasInvertidas = palabras.reverse();
    const resultado = palabrasInvertidas.join(' ');
    document.getElementById('p1-output').innerText = resultado;
}

function resolverProblema2() {
    // Problema 2: Producto esclar de dos vectores
    var p2_x1 = document.querySelector("#p2-x1").value;
    var p2_x1 = document.querySelector("#p2-x1").value;
    var p2_x3 = document.querySelector("#p2-x3").value;
    var p2_x4 = document.querySelector("#p2-x4").value;
    var p2_x5 = document.querySelector("#p2-x5").value;
    var p2_y1 = document.querySelector("#p2-y1").value;
    var p2_y2 = document.querySelector("#p2-y2").value;
    var p2_y3 = document.querySelector("#p2-y3").value;
    var p2_y4 = document.querySelector("#p2-y4").value;
    var p2_y5 = document.querySelector("#p2-y5").value;

    var resultado = (p2_x1 * p2_y1) + (p2_x2 * p2_y2) + (p2_x3 * p2_y3) + (p2_x4 * p2_y4) + (p2_x5 * p2_y5);
    document.querySelector("#p2-output").textContent = "El producto escalar de los dos vectores es: " + resultado;
}

function evento3(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[A-Z\,]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function resolverProblema3() {
    // Problema 3: Saber el número de caracteres unicos de una serie de palabras
    const input = document.getElementById('p3-input').value;
    const palabras = input.split(',');
    let resultado = '';
    palabras.forEach(palabra => {
        const caracteresUnicos = new Set(palabra).size;
        resultado += `La palabra "${palabra}" tiene ${caracteresUnicos} caracteres únicos.\n`;
    });
    document.getElementById('p3-output').innerText = resultado;
}