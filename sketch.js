var cat ,garden;
var background1;

function preload() {
    catimg1 = loadImage("images/cat1.png");   
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadImage("images/cat4.png");
    garden = loadImage("images/garden.png");
    mouseimg1 = loadImage("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
   background1 = createSprite(500,400,10,50);
   background1.addImage(garden);

  cat1 = createSprite(700,660)
  cat1.addImage(catimg1);
  cat1.scale = 0.1;

  mouse1 = createSprite(100,660)
  mouse1.addImage(mouseimg1);
  mouse1.scale = 0.1;

}
function draw() {

    background(255);
   

if(cat1.isTouching(mouse1)){

    cat1.velocityX = 0;
    mouse1.addAnimation("mouse",mouseimg2);
    mouse1.changeAnimation("mouse");
    cat1.addAnimation("catworry",catimg3);
    cat1.changeAnimation("catworry");
}

    drawSprites();
}
function keyPressed(){
    if(keyDown("LEFT_ARROW")){

        cat1.velocityX = -5;
        cat1.addAnimation("cat",catImg2);
        cat1.changeAnimation("cat");
        
    }
}
