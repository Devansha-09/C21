var fixedRect, movingRect;

var car,wall;

var square,square2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,100,40,40);
  car.shapeColor = "blue";
  car.velocityX = 4;

  wall = createSprite(1000,100,20,50);
  wall.shapeColor = "grey";

  square = createSprite(100,400,40,40);
  square.shapeColor = "blue";
  square.velocityX = 4;

  square2 = createSprite(1000,400,40,50);
  square2.shapeColor = "grey";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(car,wall);

 if(collide(square,square2)){
  stroke("white");
   textSize(30);
   fill("white");   
   text("square collided",200,200);
 }

  drawSprites();
}


