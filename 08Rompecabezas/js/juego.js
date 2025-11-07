/*

Al parecer había un error que mi mente no alcanza a comprender (ya lo solucione, era una pendejada .-.)
Estuve viendo y había un error en los rompecabezas, ya que si abría la practica desde el repo no funcionaba
Este error ya lo había sido arreglado antes, lo que sucedia era que por alguna razón que desconozco al momento de hacer el llamada del js al html no lo reconocia
Esto se debía a que la carpeta donde se encontraba el js estaba en mayusculas "./JS/juego.js" en ese estado el html no lo reconocia, al inspeccionar la página aparecia el famosisimo error 404
Como dije, para arreglar este error se cambio el nombre de la carpeta "./js/juego.js", se hicieron las respectivas pruebas, y parecia que se había arreglado
Pero lo que no tuve en cuenta es que, el cambio d nombre había sido local, es decir, en el repo no se había hecho ese cambio, por lo que si se abría desde el repositorio, ya no funcionaba
Como no se como cambiarle el nombre de la carpeta desde el repo, la mejor solución que se me ocurrió fue eliminar toda la parctica 8 que estaba en el repo, (no sin antes hacer una copia) y volverla a subir, esto permitiria que al momento de subirla se esta vez si se cambiara el nombre :D
Lastima que no hice la tarea del jira, porq hubiera sido muy divertido de documentar

*/

var instrucciones = [
    "Utiliza las flechas de navegación para mover las piezas",
    "Para ordenar las piezas guíate por la imagen Objetivo"
];

//Vamos a guardar dentro de una variable los movimientos del rompecabezas
var movimientos = [

];

//Vamos a crear una matriz para saber las posiciones del rompecabezas
var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Vamos a tener que crear en una matriz donde tengamos las posiciones correctas
var rompeCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Necesito saber las coordenadas de la pieza vacía, la que se va a mover
var filaVacia = 2;
var columnaVacia = 2;

//Necesitamos una función que se encargue de mostrar las instrucciones
function mostrarInstrucciones(instrucciones) {
    for (var i = 0; i < instrucciones.length; i++) {
        mostrarInstruccionesLista(instrucciones[i], "lista-instrucciones");
    }
}
//Esta función se encarga de crear el componente li y agregar la lista de dichas instrucciones

function mostrarInstruccionesLista(instruccion, idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

//Vamos a crear una función para saber que ganó
function checarSiGano() {
    for (var i = 0; i < rompe.length; i++) {
        for (var j = 0; j < rompe[i].length; j++) {
            var rompeActual = rompe[i][j];
            if (rompeActual !== rompeCorrecta[i][j]) {
                return false;
            }
        }
    }
    return true;
}

//Mostrar en html si se ganó
function mostrarCartelGanador() {
    if (checarSiGano()) {
        alert("Felicidades, ganaste el juego");
    }
    return false;
}

/*
Necesitamos una función que se encarge de poder intercambiar las posiciones de la pieza vacia vs cualquiera, para esto tenemos que hacer el uso de:
arreglo[][] = posicion[][]
//Intercambiar
posicion[][] = arreglo[][]
*/

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2) {
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];

    //Intercambio
    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
}

//Que se encargue de saber donde esta  lapieza vacia
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//Necesitamos tambien limitar las posiciones del rompecabezas
function posicionValida(fila, columna) {
    return fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2;
}

//Debemos crear una función que se encargue del movimiento detectando el evento de las flechas de navegación
//Debemos crear una matriz de identificacion de mov
// arroba es 38, abajo 40, izquierda 37, derecha 39
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}; //Es formato Json

function moverEnDireccion(direccion) {
    var nuevaFilaVaciaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    // Si se mueve
    if (direccion === codigosDireccion.ABAJO) {
        nuevaFilaVaciaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }

    else if (direccion === codigosDireccion.ARRIBA) {
        nuevaFilaVaciaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }

    else if (direccion === codigosDireccion.DERECHA) {
        nuevaFilaVaciaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }
    else if (direccion === codigosDireccion.IZQUIERDA) {
        nuevaFilaVaciaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }

    //Solo mando a llamar a que la posición sea valida
    if (posicionValida(nuevaFilaVaciaPiezaVacia, nuevaColumnaPiezaVacia)) {
        //Aquí tengo que hacer una funcion que se encargue de intercambiar las posiciones
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaVaciaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaVaciaPiezaVacia, nuevaColumnaPiezaVacia);
        //Guardar el últio movimiento
        actualizarUltimosMovimientos(direccion);
    }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];
    //Intercambio ya debe de ser parte de los frames y el html
    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    //Para el html
    intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

function intercambiarPosicionesDOM(idPieza1, idPieza2) {
    var pieza1 = document.getElementById(idPieza1);
    var pieza2 = document.getElementById(idPieza2);

    var padre = pieza1.parentNode;
    var siguienteHermano = pieza2.nextSibling;

    padre.insertBefore(pieza2, pieza1);
    if (siguienteHermano) {
        padre.insertBefore(pieza1, siguienteHermano);
    } else {
        padre.appendChild(pieza1);
    }
}

//Debo actualizar los movimientos en el DOM
function actualizarUltimosMovimientos(direccion) {
    var ultimoMovimiento = document.getElementById("flecha");
    switch (direccion) {
        case codigosDireccion.ARRIBA:
            ultimoMovimiento.textContent = "↑";
            break;
        case codigosDireccion.ABAJO:
            ultimoMovimiento.textContent = "↓";
            break;
        case codigosDireccion.DERECHA:
            ultimoMovimiento.textContent = "→";
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMovimiento.textContent = "←";
            break;
    }
}

//Poder mezclar las piezas
function mezclarPiezas(veces) {
    if (!veces || veces <= 0) {
        return; // ya no mostramos alerta
    }

    var direcciones = [
        codigosDireccion.ABAJO,
        codigosDireccion.ARRIBA,
        codigosDireccion.DERECHA,
        codigosDireccion.IZQUIERDA
    ];

    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    moverEnDireccion(direccion);

    setTimeout(function () {
        mezclarPiezas(veces - 1); // ahora sí se ejecuta correctamente
    }, 100);
}


//Necesitamos saber que teclas se estan oprimiendo
function capturarTeclas() {
    document.body.onkeydown = (function (evento) {
        if (evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.DERECHA || evento.which === codigosDireccion.IZQUIERDA) {
            moverEnDireccion(evento.which);
            //Saber si gnané
            var gano = checarSiGano();
            if (gano) {
                setTimeout(function () {
                    mostrarCartelGanador();
                }, 500);
            }
            evento.preventDefault();
        }
    });
}

function iniciar() {
    //Mezclar las piezas
    mezclarPiezas(30);
    capturarTeclas();
    //Capturar el último movimiento
}

iniciar();

//Mandamos traer a la función
mostrarInstrucciones(instrucciones);

document.getElementById("iniciarBoton").addEventListener("click", function() {
    mezclarPiezas(30); // Puedes ajustar el número de mezclas si quieres
});