const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,box,box2,base
function setup() 
{
  createCanvas(1500,800);
  engine = Engine.create()
  world = engine.world
  base = new Base (750,700,1400,10)
  bird = new Bird (100,650,45,45)
 box = new Box (1070,675,50,50)
 box2 = new Box (1200,675,50,50)
 pig = new Pig (1135,675,45,45)
 log = new Log (1135,625,200,20,PI/2)
/* box3 = new Box (1070,635,50,50)
 box4 = new Box (1200,635,50,50)
 pig2 = new Pig (1135,635,45,45)
 log2 = new Log (1135,610,180,20,PI/5)
 box5 = new Box (1135,595,50,50)
*/}

function draw() 
{
  background(255,255,255);  
Engine.update (engine)
base.display ()
bird.display ()
 box.display ()
 box2.display ()
 pig.display ()
 log.display ()
/* box3.display ()
 box4.display ()
 pig2.display ()
 log2.display ()
 box5.display ()
 */console.log(mouseX,mouseY)
}