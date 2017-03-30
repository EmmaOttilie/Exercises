var on = false;
var buttoncat;
var song;
var tal=0;

function preload (){
img = loadImage("assets/cat.png");
song = loadSound("assets/purr.mp3");
}

function setup() {
  console.log("Hello World");
  createCanvas(800, 600);
  background('#fae');
  
  buttoncat = createButton("Press");
  buttoncat.mousePressed(cat);
  buttoncat.position(370, 280);

}

function draw() {
  if(on){
  image(img);
  noStroke();
  fill(255);
  textSize(30);
  text("Cuddles, plz", 550, 120);
  buttoncat.hide();
  } 
 }

function cat() {
on = true
}

function mouseDragged() {
tal=tal+1;
if(tal==1) {
song.play();
song.setVolume(1);
if(tal==100) {
tal=0;
}
}
}

function mouseReleased(){
song.pause();
tal=0;
}