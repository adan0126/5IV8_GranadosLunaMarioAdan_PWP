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