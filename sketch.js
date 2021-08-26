var garden,rabbit;
var gardenImg,rabbitImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  redleafImg=loadImage("redimage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
var rand =  Math.round(random(1,100))
  console.log(rand)

}


function draw() {
  background(0);
  console.log(leaf.x)
  console.log(apple.x)
  
  edges= createEdgeSprites();
  rabbit.x=World.mouseX;
 
    
      rabbit.collide(edges);
      leaf();
      apple();

  drawSprites()
}
function leaf(){
  if(frameCount%80===0){
   var redleaf=createSprite(100,80,10,10);
    redleaf.addImage(redleafImg)
    redleaf.x=Math.round(random(20,200));
    redleaf.scale=0.02
    redleaf.velocityY=3;
  }
  }
    
  

function apple(){
if(frameCount%80===0){
  var apple=createSprite(100,50,20,10)
  apple.addImage(appleImg);
  apple.scale= 0.07;
  apple.velocityY=5;
  apple.x=Math.round(random(50,200));
}
}


