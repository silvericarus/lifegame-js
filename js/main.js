var canvas;
var cntxt;
var fps = 15;
var canvasX;
var canvasY;
var tileX, tileY;
//Board related variables
var board;
var rows;
var cols;
var white = '#FFFFFF';
var black = '#000000';

function create_board(row,col){
    var obj = new Array(row);
    for(y=0; y<col; y++){
        obj[y]=new Array(col);
    }
    return obj;
}

var Agent = function(y,x,status){
    this.x = x;
    this.y = y;
    this.status = status; //alive = 1, dead = 0
    this.nextStatus = this.status;
    this.neighbours = [];
    this.addNeighbours = function(){
        var xNeighbour,yNeighbour;
        for (i = -1; i<2; i++) {
            for (j = -1; j<2; j++){
                xNeighbour = (this.x + j + cols) % cols; // The modulo is done so when an agent
                yNeighbour = (this.y + i + rows) % rows; //is gone away from an edge of the board, they come
                //back on the other one.
                //We discard the own agent from the neighbours array
                if(i!=0 || j!=0){
                    this.neighbours.push(board[yNeighbour][xNeighbour]);
                }
            }
        }
    }

    this.draw = function(){
        var color;
        if(this.status === 1){
            color = white;
        }else{
            color = black;
        }
        cntxt.fillStyle = color;
        cntxt.fillRect(this.x*tileX,this.y*tileY,tileX,tileY);
    }

    //Conway's laws for mutating
    this.newLoop = function(){
        var sum = 0;
        for (i=0;i<this.neighbours.length;i++) {
            sum+=this.neighbours[i].status;  
        }
        //We apply this rules:
        //If a cell is alive, and have 2 or 3 neighbours, survives.
        //If a cell is dead and have 3 alive neighbours, they come back to live.
        //If a cell is alive, and have more than 3 alive neighbours, dies.
        this.nextStatus =this.status;
        //Death -> -2 o +3
        if(sum<2 || sum>3){
            this.nextStatus = 0;
        }
        //Live/Resurrect -> more than 3 alive neighbours
        if(sum == 3){
            this.nextStatus = 1;
        }
    }
    this.mutate = function(){
        this.status=this.nextStatus;   
    }
}

function init_board(obj){
    for(y=0;y<rows;y++){
        for (x=0; x<cols;x++) {
            aStatus = Math.floor(Math.random()*2);
            obj[y][x] = new Agent(y,x,aStatus);
        }
    }
    for(y=0;y<rows;y++){
        for (x=0; x<cols;x++) {
            obj[y][x].addNeighbours();
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
    cols = 300;
    rows = 300;
    //Calculate tiles size
    tileX = Math.floor(canvasX/rows);
    tileY = Math.floor(canvasY/cols);
    board = create_board(rows,cols);
    init_board(board);
    //Execute the loop
    setInterval(function(){
        main_loop();
    },1000/fps);
}

function deleteCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawCanvas(obj){
    for (y=0;y<rows;y++) {
        for (x=0;x<cols;x++) {
            obj[y][x].draw();
        }
    }
    for (y=0;y<rows;y++) {
        for (x=0;x<cols;x++) {
            obj[y][x].newLoop();
        }
    }
    for (y=0;y<rows;y++) {
        for (x=0;x<cols;x++) {
            obj[y][x].mutate();
        }
    }
}

function main_loop(){
    deleteCanvas();
    drawCanvas(board);
}
