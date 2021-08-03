var iss
var spaceBg
var spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4
var hasDocked=false

function preload (){
issImg=loadImage("images/iss.png")
spaceBg=loadImage("images/spacebg.jpg")
spaceCraft1=loadImage("images/spacecraft1.png")
spaceCraft2=loadImage("images/spacecraft2.png")
spaceCraft3=loadImage("images/spacecraft3.png")
spaceCraft4=loadImage("images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  spaceCraft=createSprite(405,100);
  spaceCraft.addImage(spaceCraft1)
  spaceCraft.scale=0.15

  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale = 0.25
}

function draw() {
  background(spaceBg); 
  
  if (!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1)
  }
   
  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y-2
    spaceCraft.addImage(spaceCraft2)
  }

  if(keyDown("DOWN_ARROW")){
    spaceCraft.y = spaceCraft.y+2
    spaceCraft.addImage(spaceCraft1)
  }

  if(keyDown("LEFT_ARROW")){
    spaceCraft.x = spaceCraft.x-2
    spaceCraft.addImage(spaceCraft4)
  }
 
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x = spaceCraft.x+2
    spaceCraft.addImage(spaceCraft3)
  }

  if(spaceCraft.x<=iss.x-10 && spaceCraft.y<=iss.y+70){
   hasDocked=true
  
  textSize(48)
  fill("white")
  text("Docking Completed!",300,300)
  }





  drawSprites();
}