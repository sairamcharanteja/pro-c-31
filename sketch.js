const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var division1,division2,division3,division4,division5,division6,division7,division8,division9;
var particles  = [];
var plinko  = [];

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,785,500,10);

  division1 = new Divisions(10,735,10,100);

  division2 = new Divisions(60,735,10,100);

  division3 = new Divisions(110,735,10,100);

  division4 = new Divisions(160,735,10,100);

  division5 = new Divisions(210,735,10,100);

  division5 = new Divisions(260,735,10,100);

  division6 = new Divisions(310,735,10,100);

  division7 = new Divisions(360,735,10,100);

  division8 = new Divisions(410,735,10,100);

  division9 = new Divisions(470,735,10,100);

 


for(var j = 40;j <=width-10;j=j+50);{
  plinko.push(new Plinko(j,75));

}
for(var j = 15;j <=width-10;j=j+175);{
  plinko.push(new Plinko(j,175));
}

}
function draw() {
  Engine.update(engine);
  background(0);
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();


  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(var j = 0;j < plinko.width;j++){
    plinko[j].display();
  }
   
  for(var j = 0;j < particles.length;j++){
    particles[j].display();
  }








  drawSprites();
}