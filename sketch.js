// define varaibles here
var garden,gardenImg;
var cat,catImgSitting,catWalkingImg,catLastImg;
var mouse,mouseImgCheese, mouseTeasingImg,mouseLastImg;

function preload() {
    //loading the images here
gardenImg=loadImage("images/garden.png");
catImgSitting=loadImage("images/cat1.png");
catWalkingImg=loadAnimation("images/cat2.png","images/cat3.png");
mouseImgCheese=loadImage("images/mouse1.png");
mouseTeasingImg=loadAnimation("images/mouse2.png","images/mouse3.png");
catLastImg=loadAnimation("images/cat4.png");
mouseLastImg=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(985,585);

    //creating the background
    garden = createSprite(470,300);
    garden.addImage("BACKGROUND",gardenImg);
    garden.scale = 1.66;

    //creating cat and mouse sprites here
    cat = createSprite(850,500);
    cat.addImage("cat1",catImgSitting);
    cat.scale = 0.13;
    cat.setCollider("rectangle",0,0,1300,800)

    mouse = createSprite(150,500);
    mouse.addImage("mouse1",mouseImgCheese);
    mouse.scale = 0.15;
}

function draw() {
  background(255);

   //to make start moving the cat and mouse when left arrow is pressed
    if(keyDown === "LEFT_ARROW"){
        keyPressed();
    }

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.addAnimation("catLast",catLastImg);
        cat.changeAnimation("catLast");
        cat.velocityX = 0;
        mouse.addAnimation("mouseLast",mouseLastImg);
        mouse.changeAnimation("mouseLast");
    }
    
    drawSprites();
}

function keyPressed(){
//For moving and changing animation write code here
    cat.velocityX = -5;
    cat.addAnimation("catWalking",catWalkingImg);
    cat.changeAnimation("catWalking");
    mouse.addAnimation("mouseTeasing",mouseTeasingImg);
    mouse.changeAnimation("mouseTeasing");
    mouse.scale = 0.09;
}