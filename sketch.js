var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, package_Options;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rect(400,625,100,20);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	package_Options = {
		isStatic : false
	}

	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	packageBody = Bodies.rectangle(width/2 , 200 , 5 , 5,package_Options);
	World.add(world, packageBody);

	rect1 = new Box(400,650,100,20);
	rect2 = new Box(350,620,20,100);
	rect3 = new Box(450,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //fill("red");
  //rect(400,650,100,20);
  //rect(350,620,20,100);
  //rect(450,620,20,100);
  Engine.update(engine);
  packageSprite.x = packageBody.position.x; 
  packageSprite.y = packageBody.position.y;
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}



