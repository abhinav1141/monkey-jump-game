var bananaimg,obstacleimg,score,obstacleGroup,backimg,playerimg,player,background,
foodGroup,edges,ground;
function preload(){
  backimg=loadImage("jungle.jpg");
playerimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("stone.png");
  
}
function setup() {
  createCanvas(400, 400);
 background=createSprite(200,200);
  background.addImage(backimg);
  background.scale=0.9;
  background.velocityX=-3;
 obstacleGroup= new Group();
  foodGroup= new Group();
  player=createSprite(50,350);
  player.addAnimation("sprite",playerimg);
  player.scale=0.1;
  ground=createSprite(200,390,400,10)
  ground.visible=false;
  
  score=0
}

function draw() {
  if(background.x<0){
    background.x=width/2;
  }
  edges=createEdgeSprites;

  food();
  obstacles();
  if(foodGroup.isTouching(player)){
    score=score+2;
    foodGroup.destroyEach();

  }
   if(obstacleGroup.isTouching(player)){
    player.scale=0.1;
     score=0;
  }
  switch(score){
      case 10:player.scale=0.2;
      break;
    case 20:player.scale=0.3;
      break;
      case 30:player.scale=0.4;
      break;
      case 40:player.scale=0.5;
      break;
  }
 
   
      if(keyDown("space") && player.y>=250 )
      {
         player.velocityY=-18;
      }
   player.velocityY=player.velocityY+0.8;
  player.collide(ground);
drawSprites();
  
  text(score,350,50)
  fill("red");
}
function food()
{
    if(frameCount%80===0)
    {
       var banana=createSprite(400,310);
       banana.addImage(bananaimg);
       banana.scale=0.1;
      banana.y=random(120,200);
       banana.velocityX=-4;
       banana.lifetime=100;
       foodGroup.add(banana);
    }
}
function obstacles()
  {
    if(frameCount%300==0)
    {
       var stone=createSprite(400,380);
       stone.addImage(obstacleimg);
       stone.scale=0.1;
       stone.velocityX=-4;
       stone.lifetime=100;
       obstacleGroup.add(stone);
    }
}

