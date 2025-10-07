function validarnumero(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var cantidad = document.getElementById("cantidad").value;
    var parseo = parseFloat(cantidad);
    var total = parseo + (parseo * 0.085);
    alert("El total de su inversion es: " + total.toFixed(2) + " pesos");
    document.getElementById("saldo").value = total.toFixed(2) + " pesos";
}

function borrar() {
    document.getElementById("cantidad").value = "";
    document.getElementById("saldo").value = "";
}

/*
Del ejercicio1 agregar el campo número de meses y un número máximo de 18 meses
*/