var fixrec;
var movrec;


function setup() {
  createCanvas(1200,800);
  fixrec = createSprite(400, 100, 50, 80);
  movrec = createSprite(400, 800, 80, 30);

  fixrec.shapeColor = "green";
  movrec.shapeColor = "blue";

  movrec.volcityY =-3;
  fixrec.volcityY = 3;
}

function draw() {
  background(255,255,255);
  
 //movrec.x = World.mouseX;
 //movrec.y = World.mouseY;
  
/*if (movrec.x - fixrec.x < fixrec.width/2+movrec.width/2 
  && fixrec.x - movrec.x < fixrec.width/2+movrec.width/2
  && movrec.y - fixrec.y < fixrec.height/2+movrec.height/2
  && fixrec.y - movrec.y < fixrec.height/2+movrec.height/2){
  //fixrec.shapeColor = "red";
  //movrec.shapeColor = "red";
//

}
else
{
  //fixrec.shapeColor = "yellow";
  //movrec.shapeColor = "yellow";
}*/

if (movrec.x - fixrec.x < fixrec.width/2+movrec.width/2 
  && fixrec.x - movrec.x < fixrec.width/2+movrec.width/2){
    movrec.velocityX = movrec.velocityX * (-1);
    fixrec.velocityX =fixrec.velocityX * (-1);
  }

if (  movrec.y - fixrec.y < fixrec.height/2+movrec.height/2
  && fixrec.y - movrec.y < fixrec.height/2+movrec.height/2) {
    movrec.velocityY = movrec.velocityY * (-1);
    fixrec.velocityY =fixrec.velocityY * (-1);
}

  drawSprites();
}