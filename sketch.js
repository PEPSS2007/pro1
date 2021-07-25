var backimg;
var player,playerimg;
var score=0;

function preload(){
  backimg=loadImage("background.jpg")
  playerimg=loadImage("player.png")
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  player=createSprite(displayWidth-1250,displayHeight-70,20,20);
  player.addImage(playerimg)
}

function draw() {
  background(backimg)
  if(keyDown("UP_ARROW")){
    player.y=player.y-3
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+3
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-3
  }

  fill("black")
  textSize(30)
  text("SCORE:"+score,displayWidth-250,displayHeight-700)
  drawSprites()
}


