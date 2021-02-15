var tHunter,tHunterImg


function preload(){
tHunterImg=loadAnimation("images/r01.png","images/r02.png")





}

function setup() {
  createCanvas(800,400);
  tHunter=createSprite(745, 315, 50, 50);
  tHunter.addAnimation("running",tHunterImg)
}

function draw() {
  background("green");  

  text(mouseX+"  "+mouseY,mouseX,mouseY)
  drawSprites();
}