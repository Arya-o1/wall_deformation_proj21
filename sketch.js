var bullet , thickness;
var wall1,wall2,wall3,wall4;
var velocity ;
var weight ;
var deformation;


function setup() {
  createCanvas(800,400);
 bullet =  createSprite(100, 200, 50, 10);
 thickness = random(22,83);
 
 wall1  = createSprite(700,200,thickness,height/2);
 
 velocity = random(200,300); 
 weight = random(30,52);

 

 deformation = 0.5*weight*velocity*velocity/thickness**3
}

function draw() {
  background("black"); 
  bullet.shapeColor = "white";

  bullet.velocityX = velocity;

  if(istouching(bullet,wall1)){
  
     bullet.velocityX = 0;
     
     textSize(20);
     text("Deformation = " +Math.round( deformation),270,200);
     text("Velocity = " + Math.round(velocity),270,230);
     text("Weight = " +  Math.round(weight),270,260); 

      if(deformation < 10){
        wall1.shapeColor = "green";
        fill("green");
        text("SAFE", 300,320);
      }else {
        wall1.shapeColor = "red"; 
        fill("red");
        text("It is not safe",300,320)
      };
    
    }
 
  
  drawSprites();
}
function istouching(obj1,obj2){
  if( obj1.x - obj2.x < obj1.width/2 + obj2.width/2 
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2){
      return true;
    }else{return false}
}

