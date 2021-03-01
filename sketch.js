const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pigthing1, pigthing2;
var log1, log2, log3, log4;
var charecter;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50);
    box5 = new Box(810,160,50,50)

    ground = new Ground(500,height,1200,20)

    pigthing1 = new Piggie(810,350);
    pigthing2 = new Piggie(810,220);

    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);


    charecter = new Red(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pigthing1.display();
    pigthing2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    charecter.display();
}