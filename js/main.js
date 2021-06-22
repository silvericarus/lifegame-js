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
    var obj = new Array(fil);
    for(y=0; y<col; y++){
        obj[y]=new Array(col);
    }
    return obj;
}

var Agent = function(y,x,estado){
    this.x = x;
    this.y = y;
    this.estado = estado; //vivo = 1, muerto = 0
    this.estadoSig = this.estado;

    this.vecinos = [];

    this.addVecinos = function(){
        var xVecino,yVecino;

        for (i = -1; i<2; i++) {
            for (j = -1; j<2; j++){
                xVecino = (this.x + j + columnas) % columnas; // Se hace el módulo para que
                yVecino = (this.y + i + filas) % filas; //al llegar a un borde, entre por el otro.

                //Descartamos el propio agente
                if(i!=0 || j!=0){
                    this.vecinos.push(tablero[yVecino][xVecino]);
                }
            }
        }
    }

    this.dibuja = function(){
        var color;
        if(this.estado == 1){
            color = blanco;
        }else{
            color = negro;
        }

        cntxt.fillStyle = color;
        cntxt.fillRect(this.x*tileX,this.y*tileY,tileX,tileY);
    }

    //Leyes de Conway para mutar
    this.nuevoCiclo = function(){
        var suma = 0;
        
        for (i=0;i<this.vecinos.length;i++) {
            suma+=this.vecinos[i].estado;  
        }

        //Aplicamos las normas
        //Si una célula está viva y tiene dos o tres vecinas vivas, sobrevive.
        //Si una célula está muerta y tiene tres vecinas vivas, nace.
        //Si una célula está viva y tiene más de tres vecinas vivas, muere.

        this.estadoSig =this.estado;

        //Muerte -> -2 o +3
        if(suma<2 || suma>3){
            this.estadoSig = 0;
        }

        //Vida/Resucita -> si tiene 3 vecinas vivas
        if(suma == 3){
            this.estadoSig = 1;
        }
    }

    this.mutar = function(){
        this.estado=this.estadoSig;   
    }
}

function inicializa_tablero(obj){
    for(y=0;y<filas;y++){
        for (x=0; x<columnas;x++) {
            estado = Math.floor(Math.random()*2);

            obj[y][x] = new Agent(y,x,estado);
        }
    }

    for(y=0;y<filas;y++){
        for (x=0; x<columnas;x++) {
            obj[y][x].addVecinos();
        }
    }
}

function start_game() {
    canvas = document.getElementById("game");
    cntxt = canvas.getContext('2d');

    canvas.width = canvasX;
    canvas.height = canvasY;

    //Calcular tamaño de tiles

    tileX = Math.floor(canvasX/filas);
    tileY = Math.floor(canvasY/columnas);

    tablero = crear_tablero(filas,columnas);
    inicializa_tablero(tablero);

    //Ejecutamos el bucle

    setInterval(function(){
        bucle_principal();
    },1000/fps);
}

function borraCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

function dibujaCanvas(obj){
    for (y=0;y<filas;y++) {
        for (x=0;x<columnas;x++) {
            obj[y][x].dibuja();
        }
    }

    for (y=0;y<filas;y++) {
        for (x=0;x<columnas;x++) {
            obj[y][x].nuevoCiclo();
        }
    }

    for (y=0;y<filas;y++) {
        for (x=0;x<columnas;x++) {
            obj[y][x].mutar();
        }
    }


}

function bucle_principal(){
    borraCanvas();
    dibujaCanvas(tablero);
}