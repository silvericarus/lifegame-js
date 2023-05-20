var canvas;
var cntxt;
var fps = 15;

var canvasX;
var canvasY;

var tileX, tileY;

//Board related variables
var tablero;
var filas;
var columnas;

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
    this.estado = estado; //alive = 1, dead = 0
    this.estadoSig = this.estado;

    this.vecinos = [];

    this.addVecinos = function(){
        var xVecino,yVecino;

        for (i = -1; i<2; i++) {
            for (j = -1; j<2; j++){
                xVecino = (this.x + j + columnas) % columnas; // The modulo is done so when an agent
                yVecino = (this.y + i + filas) % filas; //is gone away from an edge of the board, they come
                //back on the other one.

                //We discard the own agent from the neighbours array
                if(i!=0 || j!=0){
                    this.vecinos.push(tablero[yVecino][xVecino]);
                }
            }
        }
    }

    this.dibuja = function(){
        var color;
        if(this.estado === 1){
            color = blanco;
        }else{
            color = negro;
        }

        cntxt.fillStyle = color;
        cntxt.fillRect(this.x*tileX,this.y*tileY,tileX,tileY);
    }

    //Conway's laws for mutating
    this.nuevoCiclo = function(){
        var suma = 0;
        
        for (i=0;i<this.vecinos.length;i++) {
            suma+=this.vecinos[i].estado;  
        }

        //We apply this rules:
        //If a cell is alive, and have 2 or 3 neighbours, survives.
        //If a cell is dead and have 3 alive neighbours, they come back to live.
        //If a cell is alive, and have more than 3 alive neighbours, dies.

        this.estadoSig =this.estado;

        //Death -> -2 o +3
        if(suma<2 || suma>3){
            this.estadoSig = 0;
        }

        //Live/Resurrect -> more than 3 alive neighbours
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
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    canvasX = canvas.clientWidth * 2;
    canvasY = canvas.clientHeight * 2;
    columnas = 300;
    filas = 300;

    //Calculate tiles size

    tileX = Math.floor(canvasX/filas);
    tileY = Math.floor(canvasY/columnas);

    tablero = crear_tablero(filas,columnas);
    inicializa_tablero(tablero);

    //Execute the loop

    setInterval(function(){
        bucle_principal();
    },1000/fps);
}

function borraCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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