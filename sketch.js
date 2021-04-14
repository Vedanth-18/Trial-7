const Engine = Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bg1, bg2, bg1Img, bg2img, tree, treeGIF;
var boy, boyImg1, boyImg2, boyImg3;
var snowman, snowmanGIF;
var snowBody;

function preload(){
    boyImg1 = loadImage("1.png","2.png");
    boyImg2 = loadImage("3.png", "4.png");
    //boyImg3 = loadImage("");
    treeGIF = loadImage("tree.gif");
    snowmanGIF = loadImage("snowman.gif");
    bg1 = loadImage("bg1.gif");
    bg2 = loadImage("bg2.gif");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snowBody=[];


  var maxSnowCount=200;
  for(var i=0; i<maxSnowCount; i++){
    snowBody.push(new Snow(random(0,990), random(0, 550), PI/1));   
}
  boy = createSprite(400, 200, 50, 70);
  boy.addAnimation("boyImg", boyImg1);
  boy.addAnimation("boyImg.", boyImg2);

  tree = createSprite(500,200, 40,60);
  tree.addImage("treeGIF", treeGIF);
  tree.visible=true;
  Engine.update(engine);
}

function draw() {
 background("BLACK");
 var maxSnowCount=200;
 for(var i=0; i<maxSnowCount; i++){
     snowBody[i].display();
 }
 Engine.run(engine);
 keyPressed();
 drawSprites();
}

function keyPressed(){
  if(keyCode===37){
    boy.changeAnimation("boyImg.", boyImg2);
  }
  if(keyCode===39){
    boy.changeAnimation("boyImg", boyImg1);
  }
}