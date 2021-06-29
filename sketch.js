
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 270;

  

function setup() { 
  createCanvas(650,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(10,590,1300,20);

  //create division bodies
  for (var i = 0; i <= width; i = i + 100){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 80; j <=520 ; j = j + 70){
    plinkos.push(new Plinko(j, 75));
  }
  
  for (var j = 40; j <= 580; j = j + 70){
    plinkos.push(new Plinko(j, 150));
  }

  for (var j = 75; j <=520 ; j = j + 70){
    plinkos.push(new Plinko(j, 230));
  }

  for (var j = 40; j <= 580; j = j + 70){
    plinkos.push(new Plinko(j, 310));
  }

}

function draw() {
  
  background("lightpink");
  Engine.update(engine);
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
}
