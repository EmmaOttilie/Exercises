var i = 0
var r = 1
var speed = 0.1

var song;

function preload()
{
  song = loadSound('assets/ugh.mp3')
}

function setup() {
  createCanvas(800, 600); //baggrund
  background('#fae');
  song.play();            //soundtrack
  song.setVolume(1);
  
}

function draw() {
  
  push(); //Opacity rect
  fill(255, 170, 238, 10);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);
  pop();
  
  frameRate(80); //speed
  
  textSize(70);
  text("Ugh", 330, 90);
  
  translate(width/2, height/2); //stor rotation
  i = i + 1
  if(i < 20 && i > 0)
  {
  rotate(radians(40));
  rectangle();
  }
  
  if(i < 40 && i > 20)
  {
  rotate(radians(80));
  rectangle();
  }
  
  if(i < 60 && i > 40)
  {
  rotate(radians(120));
  rectangle();
  }
  
  if(i < 80 && i > 60)
  {
  rotate(radians(160));
  rectangle();
  }
  
  if(i < 100 && i > 80)
  {
  rotate(radians(200));
  rectangle();
  }
  
  if(i < 120 && i > 100)
  {
  rotate(radians(240));
  rectangle();
  }

  if(i < 140 && i > 120)
  {
  rotate(radians(280));
  rectangle();
  }
  
  if(i < 160 && i > 140)
  {
  rotate(radians(320));
  rectangle();
  }
  
  if(i < 180 && i > 160)
  {
  rotate(radians(360));
  rectangle();
  }
  
  if(i > 180)
  {i = 0
  }
}

function rectangle()      //små rotationer
{
  
  translate(0,80);
  rotate(r);
  noStroke();
  //fill(255, 170, 238)
  //ellipse(0, 0, 50, 50);
  fill(10);
  rectMode(CENTER);
  rect(0, 0, 35, 35);
  
  r = r + speed
}