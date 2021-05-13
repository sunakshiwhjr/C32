//Example of Array

//string
var string = "This is a string";
console.log(string);

//number
var num = 3;
console.log(num);

//boolean
var bool = true;
console.log(bool);

//undefined
var object;
console.log(object);

object = null;
console.log(object);

//an array holding same data type
var arr1 = [1,2,3,4];
console.log(arr1);

//an array holding different data type
var arr2 = [3, true, "Array"];
console.log(arr2);


//an array storing list of arrays
var arr = [[1,2], [2,3], [3,4]];
console.log(arr);

//access the 1st element of the array
console.log(arr[0]);

//access the 1st sub element of the 1st element of the array
console.log(arr[0][1]);

arr.push("my name");
console.log(arr);


arr.pop();
arr.pop();
console.log(arr);


//NameSpace
//Engine is used to create the Physics Engine
const Engine = Matter.Engine;
//World is used to create the physical World and add bodies to it
const World = Matter.World;
//Bodies is used to create the physical bodies which inhibits in the world
const Bodies = Matter.Bodies;

const Body = Matter.Body;

const Constraint = Matter.Constraint;

//create your own engine, world and bodies using the physics engine
var myEngine, myWorld;

var ground1, platform;
var box1, box2, box3, box4, box5;
var pig1;
var log1, log2, log3, log4, log5;
var bird1;
var sling;
var score =0;

var gameState = "onSling";

var backgroundImg;
var bg = "sprites/bg.png";

function preload()
{
  getTime();
}


function setup() {
  createCanvas(1200,400);
  getTime();
  //create our own engine
  myEngine = Engine.create();
  //myWorld is myEngine's world 
  //create the world of the our own engine
  myWorld = myEngine.world;
  //create new ground object out of the Ground Class 
   ground1 = new Ground(600, height, 1200, 20);
   platform = new Ground(150, 305, 300, 170);

  //create new Box object out of Box Class
    box1 = new Box(700, 320, 70, 70);  
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5 = new Box(810, 160, 70, 70);

  //create the pig
   pig1 = new Pig(810, 350, 50, 50);
   pig2 = new Pig(810, 220, 50, 50);

   //create Bird
   bird1 = new Bird(200, 50);

  //create log
  log1 =  new Log(810, 260, 300, PI/2);
  log2 = new Log(810, 180, 300, PI/2);
  log3 = new Log(760, 120, 150, PI/7);
  log4 = new Log(870, 120, 150, -PI/7);


  //constraintLog = new Log(200, 100, 150, PI/2);


  sling = new Slingshot(bird1.body, {x: 200, y: 50});


 /* 
    moved to slingshot.js
    var options = { 
    bodyA: bird1.body,
    bodyB: constraintLog.body

  }

  sling = Constraint.create(options);
  World.add(myWorld, sling);

*/

    
  //console.log(log1)
   }

function draw() {
 
  if(backgroundImg)
  background(backgroundImg); 
  
  noStroke();
  textSize(35);
  fill(165, 42, 42);
  text("Score: " + score, width-300, 50);

  Engine.update(myEngine);
  textSize(20);
  text(mouseX + ", " + mouseY, mouseX, mouseY);
   
 //when ground is created and displayed before the boxes then the color given to ground also applies to the boxes.
 //Solution : Add push and pop
 //Solution:  Add ground.display() after the box1.display() and box2.display()
 ground1.display();
 platform.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();

 pig1.display();
 pig1.score();
 pig2.display();
 pig2.score();

 bird1.display();

 log1.display();
 log2.display();
 log3.display();
 log4.display();
 //constraintLog.display();
 //console.log(box2.body.angle);
/*moved to slingshot.js
 line(sling.position.bodyA.x,sling.position.bodyA.y, sling.position.bodyB.x, sling.position.bodyB.y)

 */

 
  sling.display();
//  getTime();
  
  
}



function mouseDragged()
{
  if(gameState === "onSling")
  {
    Body.setPosition(bird1.body, {x: mouseX, y: mouseY});
  }
  
}


function mouseReleased()
{

    sling.fly();
    gameState = "Launched";
  
}

function keyPressed()
{
  if(keyCode === 32){

  //  sling.attach(bird1.body);
  }
}

async function getTime()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType = await response.json();
  //console.log(responseJSON);
  var dt = responseType.datetime;
  console.log(dt)
  var hr = dt.slice(11,13);
  console.log(hr);

  if(hr >=06 && hr <= 15){

    bg = "sprites/bg.png";
  }

  else{
    bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

