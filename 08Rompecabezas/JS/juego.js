var instrucciones = [
    "Utiliza las flechas de navegación para miver las piezas",
    "Para ordenar las piezas, guiate en la imagen objetivo"
];

// vamos a guardar dentro de una variable los movimientos del rompecabezas 
var movimientos = [];

// vamos a crear una matriz para saber las posiciones del rompecabezas
var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// vamos a tener una ,atriz donde tengamos las posiciones correcta
var rompeCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// necesito saber las coordenadas de la pieza vacia, la que se va a mover
var filavacia = 2;
var columnavacia = 2;

//necesitamos una función para obtener las instrucciones
function mostrarInstrcciones(instrucciones) {
    for (var i = 0 ; i < instrucciones.lenght ; i++){
        mostrarInstrcciones(instrucciones[i]),
        "lista-instrucciones";
    }
};

// esta funcion se encarga de crear el elemnto li y agrega la lista de dichas instrucciones
function mostrarInstrccionesLista(instrucciones, idlista) {
    var ul = document.getElementById(idlista);
    var li = document.createElement("li");
    li.textContent = instrucciones;
    ul.appendChild(li);
};

// función para saber que gano
function ganar() {
    for (var i = 0 ; i < rompe.length; i++) {
        for (var j = 0 ; j < rompe[i].length ; j++) {
            var rompeActual = rompe[i][j];
            if (rompe !== rompeCorrecta[i][j]) {
                return false;
            }
        }
    }
}

// mostrar en html que se gano
function cartelganar() {
    if (ganar()) {
        alert("Felicidades, ¡¡¡GANASTE!!!")
    } else {
        return false
    }
}

/*
función para intercambiar las posiciones de las piezas, utilizamos:
arreglo[][] = pocision[][]
*/

function intercambiar(filapos1, columnapos1, filapos2, columnapos2) {
    var pos1 = rompe[filapos1, columnapos1];
    var pos2 = rompe[filapos2, columnapos2];

    //intercambio
    rompe [filapos1, columnapos1] = pos2;
    rompe [filapos2, columnapos2] = pos1;
}

function iniciar() {

};

// mandamos a traer la funcion
mostrarInstrcciones(instrucciones);