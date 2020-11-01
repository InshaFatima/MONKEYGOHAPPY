
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime,score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png",
                                            "sprite_2.png","sprite_3.png","sprite_4.png",
                                            "sprite_5.png","sprite_6.png","sprite_7.png",
                                            "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
 var survivalTime = 0;
}


function draw() {
background("white")
   stroke("white");
   textSize(20);
   fill("white")
   text("Score: "+ score, 500,50);
   
   stroke("black");
   textSize(20);
   fill("black")
   survivalTime=Math.ceil(frameCount/frameRate())
   text("Survival Time: "+ survivalTime, 100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
  
  FoodGroup=new Group();
  obstacleGroup= new Group();
  
  drawSprites();
}
function spawnObstacle(){
 if (frameCount % 80 === 0){
    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + score/100);
    //generate random obstacles
    var rand = Math.round(random(1,6));
     obstacleGroup.add(obstacle);
     obstacle.scale=0.1
     obstacle.lifetime=200
 }
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(140,160));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}







