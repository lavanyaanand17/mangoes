
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//var lmango = Mango1,Mango2,Mango3,Mango4;
//var lstone = stone;



function preload()
{
	
	 boy = loadImage("boy.png");
	 tree = loadImage("tree.png")
	 
}

function setup() {
	createCanvas(1000, 700);




	engine = Engine.create();
	world = engine.world;
	stonee = new Stone(120,400,50)
	
	Mango1 = new Mango(620,300,50)
	Mango2 = new Mango(660,280,50)
	Mango3 = new Mango(700,220,50)
	Mango4 = new Mango(730,320,50)

	soil = new Soil(600,320,40)

	Launcher1 = new Launcher(stonee.body,{x:136,y:400})

	ground = new Ground(600,height,20);
    platform = new Ground(200, 620, 700, 170);

	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
detectCollision(stonee,Mango1);
detectCollision(stonee,Mango2);
detectCollision(stonee,Mango3);
detectCollision(stonee,Mango4);




image(boy,100,355,150,250)
image(tree,550,150,300,400)



stonee.display();



Mango1.display();
Mango2.display();
Mango3.display();
Mango4.display();

soil.display();

platform.display();

detectCollision(stonee,Mango1);
detectCollision(stonee,Mango2);
detectCollision(stonee,Mango3);
detectCollision(stonee,Mango4);


  drawSprites();
 
}

function mouseDragged (){

	Matter.Body.setPosition(stonee.body,{x:mouseX,y:mouseY}) 
	
	} 
	function mouseReleased () {

		Launcher1.fly()
		
		}

	function detectCollision (stonee,lmango){

		mangoBodyPosition = lmango.body.position
		stoneeBodyPosition = stonee.body.position
  
    var distance =dist (stoneeBodyPosition.x,stoneeBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance <=lmango.r+stonee.r)
   {
     Matter.Body.setStatic(lmango.body,false);
   }

	}


function keyPressed(){

if (keyCode === 32){
	Matter.Body.setPosition(stonee.body,{x:120,y:400})
	Launcher1.attach(stonee.body);
}


}