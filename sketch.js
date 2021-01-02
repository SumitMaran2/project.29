const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground1, ground2;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18;
var box19,box20;
var box21;
var box22,box23,box24,box25;
var box26,box27,box28;
var box29;
var rope;

var pollygon;



function setup() {
	createCanvas(1200, 600);
    
    engine = Engine.create();
	world = engine.world;
    
    ground1 = new Ground(500,370,300,20);
    ground2 = new Ground(900,200,200,20);
    pollygon = new Polygon(100,300,60,60);
  

    box1 = new Box1(400,350,33,40);
    box2 = new Box1(427,350,33,40);
    box3 = new Box1(454,350,33,40);
    box4 = new Box1(481,350,33,40);
    box5 = new Box1(508,350,33,40);
    box6 = new Box1(535,350,33,40);
    box7 = new Box1(562,350,33,40); 
    box8 = new Box1(589,350,33,40); 

    box9 = new Box2(420,320,33,40);
    box10 = new Box2(447,320,33,40);
    box11 = new Box2(476,320,33,40);
    box12 = new Box2(503,320,33,40);
    box13 = new Box2(530,320,33,40);
    box14 = new Box2(557,320,33,40);

    box15 = new Box3(447,300,33,40);
    box16 = new Box3(476,300,33,40);
    box17 = new Box3(503,300,33,40);
    box18 = new Box3(530,300,33,40);

    box19 = new Box2(476,270,33,40);
    box20 = new Box2(503,270,33,40);

  

    box22 = new Box1(860,180,33,40);
    box23 = new Box1(880,180,33,40);
    box24 = new Box1(900,180,33,40);
    box25 = new Box1(920,180,33,40);
     
    box26 = new Box3(870,160,33,40);
    box27 = new Box3(890,160,33,40);
    box28 = new Box3(910,160,33,40);

    box29 = new Box2(890,140,33,40);

    rope = new Chain(pollygon.body,{x:100,y:310})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();

  ground2.display();

  box1.display();
  box2.display(); 
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  

  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box26.display();
  box27.display();
  box28.display();

  box29.display();

  pollygon.display();
 
  rope.display();

  
  stroke("brown");
  fill("brown");
  textSize(30);
  text("Drag haxagonal stone and release it,To launch it towards the blocks",220,550);
  
  stroke("brown");
  fill("brown");
  textSize(20);
  text("Press Space for another chance",220,60);
  
  
 
}

function mouseDragged(){
Matter.Body.setPosition(pollygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
rope.fly();
}

function keyPressed(){
if(keyCode === 32) {
Matter.Body.setPosition(pollygon.body,{x:100,y:310})
rope.attach(pollygon.body)
}
}