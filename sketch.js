var movingrect;
var fixedrect;

function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 800,100, 50);
  movingrect.velocityY=-5;
  fixedrect=createSprite(400,100,50,100);
  fixedrect.velocityY=5;
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}

function draw() {

  background(0);
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
      movingrect.velocityX=movingrect.velocityX*(-1);
      fixedrect.velocityX=fixedrect.velocityX*(-1);
    }
    
      
      if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
        fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
          movingrect.velocityY=movingrect.velocityY*(-1);
      fixedrect.velocityY=fixedrect.velocityY*(-1);
        }
  drawSprites();
}