var canvas;
var cntxt;
var fps = 30;

var canvasX = 500;
var canvasY = 500;

var tileX, tileY;

//Variables relacionadas con el tablero
var tablero;
var filas = 100;
var columnas = 100;

var blanco = '#FFFFFF';

var negro = '#000000';

function crear_tablero(fil,col){
    var obj = new Array(col);
    for(y=0; y<col; y++){
        obj[y]=new Array(fil);
    }
    return obj;
}

function start_game() {
    canvas = document.getElementById("game");
    cntxt = canvas.getContext("2D");

    canvas.width = canvasX;
    canvas.height = canvasY;

    //Calcular tamaño de tiles

    tileX = Math.floor(canvasX/filas);
    tileY = Math.floor(canvasY/columnas);

    crear_tablero(filas,columnas);

    //Ejecutamos el bucle

    setInterval(function(){
        bucle_principal();
    },1000/fps);
}

function borraCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

function bucle_principal(){
    console.log("Foo");
}