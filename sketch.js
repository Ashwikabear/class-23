var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite,logSprite,log2S,log3S;
var log1,log2,log3;
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
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.shapeColor="brown"
	//logSprite = createSprite(300,600,20,120);
	//logSprite.shapeColor="brown";
	
	//log2S=createSprite(500,600,20,120)
	//log2S.shapeColor="brown"

	//log3S=createSprite(400,650,200,20)
	//log3S.shapeColor="brown"

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 log1=Bodies.rectangle(300,600,20,120,{isStatic:true})
	 World.add(world,log1);

	 log2=Bodies.rectangle(500,600,20,120,{isStatic:true})
	 World.add(world,log2);

	 log3=Bodies.rectangle(400,650,200,20,{isStatic:true})
	 World.add(world,log3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(log3.position.x,log3.position.y,200,20);
  rect(log2.position.x,log2.position.y,20,120)
  rect(log1.position.x,log1.position.y,20,120)
  
  //keyPressed()
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	//packageSprite.Bodies.Static(packageSprite,false)
    Matter.Body.setStatic(packageBody,false)
  }
}



