const World= Matter.World;
 const Engine=Matter.Engine;
  const Bodies=Matter.Bodies; 
  var engine,world,ball,ground; 
  function setup() { 
    var canvas= createCanvas(400,400) 
    engine=Engine.create(); 

    world=engine.world; 
    var ground_options = {
      isStatic:true
    }
    ground=Bodies.rectangle(200,300,400,5,ground_options)
    
    var ball_options = {
      restitution:1
    }
    ball=Bodies.circle(200,100,30,ball_options) 
    World.add(world,ball); 
    World.add(world,ground); 
 } 
    function draw() 
    { 
     
      background(0) 
      Engine.update(engine);
      rectMode(CENTER) 
      ellipseMode(RADIUS)
      ellipse(ball.position.x,ball.position.y,30);
      rect(ground.position.x,ground.position.y,400,5)
     
    }