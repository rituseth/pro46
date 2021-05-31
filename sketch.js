/*pc (human)- skills- two images (human , the funny human )
npcs (diseases)-  skills - move randomely . 
the structure 
In this game Pacman is a human and the monsters are various
diseases. The blinky points are going to be the safe houses . And the
yellow dots will be as it is . If any disease touches you then you
freeze for 30 seconds. The more yellow dots you collect the more
points you will recevice . But the more you get cought by the viruses ,
then your score will be negative . If you cross 1000 points then there
is a twist . You will get the safe houses as well as the treatment for
avoiding a particular disease . Like in the pacman the monsters go
blue in colour whenever you get on of the bliny points. You will get all
this but the monsters ( diseases) will increase by 2
*/

  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
  //const Render = Matter.Render;
  var engine, world;
  var g ,g2,g3,g4,g5
  var f1,f2,f3,f4,f5,f6
  var begin ;
var gameState="start" ;
var PLAY =0
var END=1
 var hBody
  function preload ()
{

}
function setup (){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

 //bgin
 begin = new Begin();


	g= new Ground (300,700,1000,20);
  //houses
g2 = new Ground (200,250,10,10)
g3 = new Ground (600,100,10,10)
g4 = new Ground(50,600,10,10)
g5 = new Ground(760,600,10,10)

// fence
f1=new Ground (200,290,330,10)
f2 = new Ground (40,150,10,300)
f3 = new Ground (348,235,10,100)
//boy

var hBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world,hBody);




   // var render = Render.create({
		//element: document.body,
		//engine: engine,
	//	options: {
		//  width: 800,
//height: 700,
		 // wireframes: false
	//	}
	//  });
 //Render.run(render); 
 Engine.run(engine);
}
function draw (){

  
console.log("gameState:"+gameState)
  if (gameState=== "start" ){
    background("white");
begin.display()
         
  }
else if (gameState === PLAY){
  g.display()
  g2.display()
  g3.display()
  g4.display()
  g5.display()
f1.display()
  f2.display()
  f3.display()
hBody.display()
  hSprite.x= hBody.position.x 
  hSprite.y= hBody.position.y 
movement()
}

 

}


function movement (){
  if(keyDown(LEFT_ARROW)){
    hSprite.x= hSprite.x-20
     }
     else if(keyDown(RIGHT_ARROW)){
       hSprite.x = hSprite.x+20
     }
     else if(keyDown(UP_ARROW)){
 hSprite.y=hSprite.y-20
     }
     else if(keyDown(DOWN_ARROW)){
     hSprite.y= hSprite.y+20
     }
}