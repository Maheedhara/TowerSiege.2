const Polygon = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  slingShot;

function setup() {
  createCanvas(1000,500);
  polygon = Polygon.create();
  world = polygon.world;
  platform1 = new Ground(690, 250, 200, 20);
  platform2 = new Ground(390, 350, 200, 20);
  box1 = new Box(330,335,30,40);
  box2 = new Box(360,335,30,40);
  box3 = new Box(390,335,30,40);
  box4 = new Box(420,335,30,40);
  box5 = new Box(450,335,30,40);
  box6 = new Box(360,295,30,40);
  box7 = new Box(390,295,30,40);
  box8 = new Box(420,295,30,40);
  box9 = new Box(390,255,30,40);
  box10 = new Box(630,235,30,40);
  box12 = new Box(660,235,30,40);
  box13 = new Box(690,235,30,40);
  box14 = new Box(720,235,30,40);
  box15 = new Box(750,235,30,40);
  box16 = new Box(660,195,30,40);
  box17 = new Box(690,195,30,40);
  box18 = new Box(720,195,30,40);
  box19 = new Box(690,155,30,40);

  ball = new Ball(100,100);

  //log6 = new Log(230,180,80, PI/2);
  slingshot = new SlingShot(ball.body,{x:200, y:100});
}

function draw() {
  background("blue");  
  Polygon.update(polygon);
 // strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  platform1.display();
  platform2.display();
  ball.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(ball.body);
  } 
}