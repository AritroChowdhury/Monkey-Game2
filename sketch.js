
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 //createCanvas(600, 600);
  


 
  
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
  
  
  
 
}


function draw() {
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  
  }
  
  if(monkey.isTouching(FoodGroup)) {
   FoodGroup.destroyEach();     
  }
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
       
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}





function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
 
   banana= createSprite(300, 300, 300, 300);
 banana.addImage(bananaImage);
  banana.scale=0.1;
    
    
    
    banana.setLifetime=15;
    banana.velocityX=-3;
    
    
    
 
}
}
function spawnObstacles() {

  if (frameCount % 300 === 0) {
 
  obstacle=createSprite(300,300,1,1);
 obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
    
    
    obstacle.setLifetime=1;
    obstacle.velocityX=-3;
    
    
 
    }
    
 
}

