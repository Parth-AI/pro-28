const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

	slingshot = new Chain(paperObject.body,{x:500,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  slingshot.display();
 
}

/*function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  	}
}*/

function mouseDragged(){
	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
	slingshot.fly();
 }
