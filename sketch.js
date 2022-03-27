
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var ground1;
var ground2;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(500,390,1000,20);
ground1=new Ground(490,380,20,150);
ground2=new Ground(700,380,20,150);


var ball_options={
	restitution:0.3,
	density:1.2
}
ball=Bodies.circle(100,200,20,ball_options)
World.add(world,ball)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
ellipse(ball.position.x,ball.position.y,20,20);
ground.show();
ground1.show();
ground2.show();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:40,y:-45});

	}
}

