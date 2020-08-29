//declare the variables for the wall, thickness, bullet, speed, weight.
var wall, thickness;
var bullet, speed, weight;

//function setup.
function setup() {

  //create a canvas.
  createCanvas(1600,400);

  //set a random number for the thickness, speed, weight.
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  //create a sprite for the bullet.
  bullet = createSprite(50, 200, 30, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  //create a sprite for the wall.
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}
//function draw.
function draw() {

  //set aclor to the backround.
  background("blue");  

  //call the function isColliding and pass arguments.
  if(isColliding(bullet, wall)){

    bullet.velocityX = 0;

    //calculate the damage.
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    //make the wall green if damage<10.
  if(damage<10){

    wall.shapeColor = color(0,255,0);

  }

  //make the wall red if damage>10.
  if(damage>10){

    wall.shapeColor = color(255,0,0);

  }
}
  //draw the sprites.
  drawSprites();
}
//function isColliding set parameters.
function isColliding(bullet, wall){

  //wall left edge is equal to the xPosition of the wall.
   wallLeftEdge = wall.x;
   //the right edge of the bullet is equal to its positionX + the width of the bullet.
   bulletRightEdge= bullet.x + bullet.width;

   //make the computer tell true or false. if the bullet goes through the wall, it should say yes.
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }else {
      return false;
    }
}

//END.



