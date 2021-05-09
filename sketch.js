const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockGreen1,BlockGreen2,BlockGreen3,BlockGreen4,BlockGreen5;

var BlockGrey1,BlockGrey2,BlockGrey3,BlockGrey4;

var BlockOrange1,BlockOrange2,BlockOrange3;

var BlockBrown1,BlockBrown2;

var BlockWhith1;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //first level
  BlockBlue1 = new Box(200, 180, 20, 20);

  BlockBlue2 = new Box(220, 180, 20, 20);

  BlockBlue3 = new Box(240, 180, 20, 20);

  BlockBlue4 = new Box(260, 180, 20, 20);

  BlockBlue5 = new Box(280, 180, 20, 20);

  BlockBlue6 = new Box(300, 180, 20, 20);

  BlockBlue7 = new Box(320, 180, 20, 20);

  //second level
  BlockPink1 = new BoxPink(208, 150, 20, 20);

  BlockPink2 = new BoxPink(228, 150, 20, 20);

  BlockPink3 = new BoxPink(248, 150, 20, 20);

  BlockPink4 = new BoxPink(268, 150, 20, 20);

  BlockPink5 = new BoxPink(288, 150, 20, 20);

  BlockPink6 = new BoxPink(308, 150, 20, 20);

  //Level third

  BlockGreen1 = new Green(216, 120, 20, 20);

  BlockGreen2 = new Green(236, 120, 20, 20);

  BlockGreen3 = new Green(256, 120, 20, 20);

  BlockGreen4 = new Green(276, 120, 20, 20);

  BlockGreen5 = new Green(296, 120, 20, 20);

  //Level fourth

  BlockGrey1 = new Grey(224, 90, 20, 20);

  BlockGrey2 = new Grey(244, 90, 20, 20);

  BlockGrey3 = new Grey(264, 90, 20, 20);

  BlockGrey4 = new Grey(284, 90, 20, 20);

  //Level Fifth

  BlockOrange1 = new Orange(232, 60, 20, 20);

  BlockOrange2 = new Orange(252, 60, 20, 20);

  BlockOrange3 = new Orange(272, 60, 20, 20);

  polygon_1 = new poly(110, 100, 20, 20);

  //level sixth

  BlockBrown1 = new Brown(240, 30, 20, 20);

  BlockBrown2 = new Brown(260, 30, 20, 20);

  //level seventh

  BlockWhith1 = new White(248, 0, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background("black");
  ground1.display();

  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockGreen1.display ();

  BlockGreen2.display ();

  BlockGreen3.display ();

  BlockGreen4.display ();

  BlockGreen5.display ();

  BlockGrey1.display ();

  BlockGrey2.display ();
  
  BlockGrey3.display ();

  BlockGrey4.display ();

  BlockOrange1.display ();

  BlockOrange2.display ();
  
  BlockOrange3.display ();

  BlockBrown1.display ();

  BlockBrown2.display ();

  BlockWhith1.display ();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.polygon);
  }
}
