var car, wall;

var speed, weight;

function setup() {
  createCanvas(1500,400);

  speed=random(20,100)
  weight=random(300,1600)

  car= createSprite(40, 200, 50, 50);
  car.shapeColor="brown"

  wall=createSprite(1400,200,40,300)
  wall.shapeColor=color(30,230,30)

}

function draw() {
  background(0)
  
  car.velocityX=speed;

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    deformation = 0.5 * weight * speed * speed/22509;
    if (deformation>180){
      car.shapeColor="red"
    }
    if (deformation<180 && deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
  }
  
  
  
    
  drawSprites();
}