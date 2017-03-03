var img;
var r, g, b;
var song;


function preload()
{
song = loadSound('assets/spooks.mp3');
}


function setup() {
createCanvas(1600, 1200);     //billede
img = loadImage('assets/Wall.jpg');
song.play();
song.setVolume(1);
  }

function draw() {
  image(img, 0, 0);           //canvas
  image(img, 0, height, img.width, img.height);
  
  
var tæller = frameCount%730;  //tæller

  noStroke();
  fill(210, 127);
  
  if (tæller > 25 && tæller < 95){
  col();
  bulp(30, 420);                //r   RUN
  bulp2(30, 420);
  }
  
  if (tæller > 105 && tæller < 200){
  col();
  bulp(305, 462);              //u   RUN
  bulp2(305, 462);
  }
  
  if (tæller > 210 && tæller < 280){
  col();
  bulp(505, 272);              //n   RUN
  bulp2(505, 272);
  }
  
  if (tæller > 400 && tæller < 470){
  col();
  bulp(715, 38);               //h   HELP
  bulp2(715, 38);
  }
  
  if (tæller > 480 && tæller < 550){
  col();
  bulp(430, 96);               //e   HELP
  bulp2(430, 96);
  }
  
  if (tæller > 560 && tæller < 630){
  col();
  bulp(301, 267);              //l   HELP
  bulp2(301, 267);
  }
 
  if (tæller > 640 && tæller < 700){
  col();
  bulp(672, 242);              //p   HELP
  bulp2(672, 242);
  }
}

function bulp(x, y){
  push();
  fill(r, g, b, 160);
  ellipse(x, y, 20, 20);      //blink
  pop();
}

function bulp2(x, y){
  push();
  fill(r, g, b, 90);
  ellipse(x, y, 50, 50);      //lys
  pop();
}

function col(){               //farve
r = random(255);
g = random(255);
b = random(255);
}

