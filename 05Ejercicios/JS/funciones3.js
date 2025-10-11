function validarCosto(e) { // e = evento
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var costo = document.getElementById("costo").value;
    var parseoCosto = parseFloat(costo);
    var descuento = parseoCosto * 0.15;
    var total = parseoCosto - descuento;
    alert("El total con el descuento es: " + total.toFixed(2) + " pesos");
    document.getElementById("total").value = total.toFixed(2);
}

function borrar() {
    document.getElementById("costo").value = "";
    document.getElementById("total").value = "";
}