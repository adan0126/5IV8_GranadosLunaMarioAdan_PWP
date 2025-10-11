function validarCal(e) { // e = evento
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var pnt1 = document.getElementById("calParcial").value;
    var pnt2 = document.getElementById("calExamen").value;
    var pnt3 = document.getElementById("calProyecto").value;
    var parseopnt1 = parseInt(pnt1);
    var parseopnt2 = parseInt(pnt2);
    var parseopnt3 = parseInt(pnt3);

    if (parseopnt1 > 100 || parseopnt2 > 100 || parseopnt3 > 100) {
        alert("Los puntos no pueden ser mayores a 100");
        return;
    }

    var cal1 = parseopnt1 * 0.55;
    var cal2 = parseopnt2 * 0.3;
    var cal3 = parseopnt3 * 0.15;
    var promedio = cal1 + cal2 + cal3;

    alert("El promedio final es: " + promedio.toFixed(0));
    document.getElementById("promedio").value = promedio.toFixed(0);
}

function borrar() {
    document.getElementById("calParcial").value = "";
    document.getElementById("calExamen").value = "";
    document.getElementById("calProyecto").value = "";
    document.getElementById("promedio").value = "";
}