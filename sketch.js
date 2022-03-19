//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dogimg, happydogimg;
function preload()
{
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale= 0.2;

  database = firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogimg);
}
  drawSprites();
  //add styles here

  fill(255,255,254);
  stroke('black');
  text('food remaining '+foodS,170,200);
  textSize(13);
  text('note: press up arrow key to feed milk',130,10,300,20);

}
function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

