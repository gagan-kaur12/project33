const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var count = 0;
var gameState ="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();   
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   for( var n=1; n<350; n= n+80){
   text("500",n+30,530);
   }

   for( var m=430; m<520; m= m+80){
    text("100",m,530);
    }
    for( var z=590; z<890; z = z+80){
      text("200",z,530);
      }
      push();
      stroke("yellow");
      strokeWeight(7);
      line(1,480,800,480);
      pop();

     
     if(particle != null){
        particle.display();
     if(particle.body.position.y>780){
       if(particle.body.position.x<355){
        score+= 500;
        particle = null;
        if(count>= 5){
          gameState = "end";}
      }
        else if(particle.body.position.x>360 && particle.body.position.x<560){
          score+= 200;
            particle = null;
            if(count>= 5){
              gameState = "end";}
            }
        else if(particle.body.position.x>560 && particle.body.position.x<900 ){
          score+= 100;
           particle = null;
            if(count>= 5){
              gameState = "end";}
             }
}
       }
       if(gameState ==="end"){
         textSize(55);
         fill("purple");
         text("GAMEOVER", 150,250)
       }
      }

function mousePressed(){
  if(gameState != "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}
     