var song;					//sang
var button1;				//knapper
var button2;
var slider1;				//sliders
var slider2;
var spot = {				//check1
x1: 100,
y1: 100
}
var spot = {				//check2
x2: 100,
y2: 100
}
var spot = {				//check3
x3: 100,
y3: 100
}
var spot = {				//check4
x4: 100,
y4: 100
}
var spot = {				//check5
x5: 100,
y5: 100
}
var spot = {				//check6
x6: 100,
y6: 100
}
var checkbox1;				
var checkbox2;
var checkbox3;
var checkbox4;
var checkbox5;
var checkbox6;
var knap;					//prize
var anglex = 0;				//slider angles
var angley = 0;


function preload(){							//sang load
song = loadSound('assets/rainbow.mp3')
}

function setup() {							//all the stuff
console.log("Hello World");
createCanvas(800, 600);
song.play();
song.setVolume(1);

knap = new Knap('YAY');

button1 = createButton('WIN');
button1.position(150, 280);

button2 = createButton('PLZ');
button2.position(600, 280);

slider1 = createSlider(0, 100, 50);
slider1.position(325, 60);

slider2 = createSlider(0, 100, 50);
slider2.position(325, 530);

spot.x1 = random(0, width);					//checkbox1pos
spot.y1 = random(0, height);
checkbox1 = createCheckbox('', false);
checkbox1.changed(myCheckedEvent);
checkbox1.position(spot.x1, spot.y1);

spot.x2 = random(0, width);					//checkbox2pos
spot.y2 = random(0, height);
checkbox2 = createCheckbox('', false);
checkbox2.changed(myCheckedEvent);
checkbox2.position(spot.x2, spot.y2);

spot.x3 = random(0, width);					//checkbox3pos
spot.y3 = random(0, height);	
checkbox3 = createCheckbox('', false);
checkbox3.changed(myCheckedEvent);
checkbox3.position(spot.x3, spot.y3);

spot.x4 = random(0, width);					//checkbox4pos
spot.y4 = random(0, height);
checkbox4 = createCheckbox('', false);
checkbox4.changed(myCheckedEvent);
checkbox4.position(spot.x4, spot.y4);

spot.x5 = random(0, width);					//checkbox5pos
spot.y5 = random(0, height);
checkbox5 = createCheckbox('', false);
checkbox5.changed(myCheckedEvent);
checkbox5.position(spot.x5, spot.y5);

spot.x6 = random(0, width);					//checkbox6pos
spot.y6 = random(0, height);
checkbox6 = createCheckbox('', false);
checkbox6.changed(myCheckedEvent);
checkbox6.position(spot.x6, spot.y6);
}

 function draw(){							//background + prize
 background('#fae');
 win();
 
 var x = map(sin(anglex), -1, 1, 0, 100);	//slider-zombies
 slider1.value(x);
 anglex += 0.1;
 
 var y = map(sin(angley), -1, 1, 0, 100);
 slider2.value(y);
 angley += 0.02;
 }

function myCheckedEvent(){					//checking boxes
if(this.checked()) {
console.log("Checking!");
} else {
console.log("Unchecking!");
}
}

function win(){								//display prize IF
if (checkbox1.checked()
&& checkbox3.checked()
&& checkbox6.checked()){
knap.display();
} 
}

function Knap(tekst){						//prize object
this.tekst = tekst;
this.display = function(){
 noStroke()
 ellipse(400, 280, 100, 100);
 textSize(24);
 text(this.tekst, 378, 290);
 }
}




