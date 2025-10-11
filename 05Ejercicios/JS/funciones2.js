function validarSalario(e) { // e = evento
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validarVentas(e) { // e = evento
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var salario = document.getElementById("salario").value;
    var parseoSalario = parseFloat(salario);
    var ventas = document.getElementById("ventas").value;
    var parseoVentas = parseInt(ventas);
    var comision = parseoVentas * 0.1;
    var total = parseoSalario + comision;
    alert("El total de su salario es: " + total.toFixed(2) + " pesos");
    document.getElementById("total").value = total.toFixed(2);
}

function borrar() {
    document.getElementById("salario").value = "";
    document.getElementById("ventas").value = "";
    document.getElementById("total").value = "";
}