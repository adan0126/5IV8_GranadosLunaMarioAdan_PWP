function validarAnio(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var nacimiento = document.getElementById("fechanacimiento").value;
    var anio = new Date().getFullYear();
    var edad = anio - nacimiento;
    document.getElementById("edad").value = edad;
    document.getElementById("fechaactual").value = anio;
}

function borrar(){
    document.getElementById("fechanacimiento").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("fechaactual").value = "";
}