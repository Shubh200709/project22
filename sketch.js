var starImg,bgImg;
var star, starBody;
var fairySound;

//create variable for fairy sprite and fairyImg
var fairy,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairySound=loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(500,500);

	//write code to play fairyVoice sound
	fairySound.play();
    //create fairy sprite and add animation for fairy
	fairy=createSprite(100,420,20,20);
    fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale=0.15;

	star = createSprite(450,30);
	star.addImage(starImg);
	star.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(450,30,5,{restitution:0.5, isStatic:true});
	World.add(world,starBody);
	
	Engine.run(engine);
}

function draw() {
  background(bgImg);

  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  keyPressed();

  //write code to stop star in the hand of fairy
  if(star.y>400 && starBody.position.y>400){
	Matter.Body.setStatic(starBody,true);
}

drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("LEFT")){
		fairy.x=fairy.x-5;
			}
		
	if(keyDown("RIGHT")){
		fairy.x=fairy.x+5;
			}
}