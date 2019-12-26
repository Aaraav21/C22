const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object,ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
    var object_options={
        isStatic:true
    }
    object=Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

    var ball_options={
        restitution:5
    }
    ball=Bodies.circle(200,100,30,ball_options);
    World.add(world,ball);
}

function draw(){
    background("blue");
    
    Engine.update(engine);
    fill("red");
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    fill("white");
ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30);
}