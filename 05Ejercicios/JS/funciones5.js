function validarPersona(e) { // e = evento
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var chicos = document.getElementById("nchicos").value;
    var parseoChicos = parseInt(chicos);
    var chicas = document.getElementById("nchicas").value;
    var parseoChicas = parseInt(chicas);
    var total = (parseoChicos + parseoChicas);
    var porcentajeChicos = (parseoChicos / total) * 100;
    var porcentajeChicas = (parseoChicas / total) * 100;
    alert("El porcentaje de chicos es: " + porcentajeChicos.toFixed(2) + "%\n" +
          "El porcentaje de chicas es: " + porcentajeChicas.toFixed(2) + "%");
    document.getElementById("pchicos").value = porcentajeChicos.toFixed(2) + "%";
    document.getElementById("pchicas").value = porcentajeChicas.toFixed(2) + "%";
}

function borrar() {
    document.getElementById("nchicos").value = "";
    document.getElementById("nchicas").value = "";
    document.getElementById("pchicos").value = "";
    document.getElementById("pchicas").value = "";
}