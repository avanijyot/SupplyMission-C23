//to create sprite objects
var helicopterIMG, helicopterSprite;
var packageBody, packageSprite, packageIMG; 
var ground;

//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//to preload the images
function preload(){

	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");

}

function setup() {
	
	//to create the canvas
	createCanvas(800, 700); 

	//rectMode
	rectMode(CENTER);

	//to create package
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	//to create helicopter
	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6; 

	//to create ground
	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	//to create engine and world
	engine = Engine.create();
	world = engine.world;

	//create a package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//create a ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//position of box
 	boxPosition = width/2-100
 	boxY = 610;

	//box
 	boxleftSprite = createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase = createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor = color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite = createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	//to run engine
	Engine.run(engine);
  
}


function draw() {

  //rectMode	
  rectMode(CENTER);

  //to give background
  background(0);
 
  //position of package
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 

  //to move the helicopter 
  if(keyDown("left")){
	  helicopterSprite.x = helicopterSprite.x-10;
	  packageBody.position.x = helicopterSprite.x;
      packageSprite.x = helicopterSprite.x;
  }

  if(keyDown("right")){
	  helicopterSprite.x = helicopterSprite.x+10; 
	  packageBody.position.x = helicopterSprite.x;
	  packageSprite.x = helicopterSprite.x;
  }
  
  //to drop the packages
  if(keyDown("down")){
	  Matter.Body.setStatic(packageBody,false);
  }

  //to draw the objects
  drawSprites();

}
