var r1, r2;
var gb1, gb2, gb3, gb4;
function setup() {
  createCanvas(800,400);
  r1 = createSprite(500, 200, 50, 50);
  r1.shapeColor = "red"
  r2 = createSprite(600, 200, 50, 50);
  r2.shapeColor = "red"
  r1.debug = true
  r2.debug = true
  gb1 = createSprite(100, 200, 50, 50);
  gb1.shapeColor = "red"
  gb2 = createSprite(200, 200, 50, 50);
  gb2.shapeColor = "red"
  gb1.debug = true
  gb2.debug = true
  gb3 = createSprite(300, 200, 50, 50);
  gb3.shapeColor = "red"
  gb4 = createSprite(400, 200, 50, 50);
  gb4.shapeColor = "red"
  gb3.debug = true
  gb4.debug = true
}

function draw() {
  background(255,255,255);  
  r2.x = World.mouseX
  r2.y = World.mouseY
if(isTouching(r2,gb4))
  {
   r2.shapeColor = "green";
  gb4.shapeColor = "green";
  }

  else
  {
   r2.shapeColor = "red";
  gb4.shapeColor = "red";
  }
  
  drawSprites();
}
