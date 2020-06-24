var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var c1,c2,c3,c4,cars=[]


function setup(){
  canvas = createCanvas(displayWidth-40,displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayWidth,displayHeight);
  
}


function draw(){
  background("blue");
  if(playerCount === 4){

    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
}
