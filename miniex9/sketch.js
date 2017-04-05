var on = false;

var weatherUK;
var weatherDK;
var weatherMX;
var weatherLB;

var bottonUK;
var bottonDK;
var buttonMX;
var buttonLB;

function setup() {
createCanvas(1200, 600);
background(255);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8b53ca3f53482f46aff2886b9a456f30&units=metric', gotData);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Denmark&APPID=8b53ca3f53482f46aff2886b9a456f30&units=metric', gotData2);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Mexico&APPID=8b53ca3f53482f46aff2886b9a456f30&units=metric', gotData3);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=libya&APPID=8b53ca3f53482f46aff2886b9a456f30&units=metric', gotData4);
console.log('hello world');
//bottons
buttonUK = createButton("United Kingdom");
buttonUK.mousePressed(tempUK);
buttonUK.position(250, 500);
buttonDK = createButton("Denmark");
buttonDK.mousePressed(tempDK);
buttonDK.position(470, 500);
buttonMX = createButton("Mexico");
buttonMX.mousePressed(tempMX);
buttonMX.position(675, 500);
buttonLB = createButton("Libya");
buttonLB.mousePressed(tempLB);
buttonLB.position(880, 500);
}

function gotData(data) {
weatherUK = data;
}

function gotData2(data) {
weatherDK = data;
}

function gotData3(data) {
weatherMX = data;
}

function gotData4(data) {
weatherLB = data;
}

function draw() {
noStroke();
fill(255, 170, 238);
if (weatherUK) {
ellipse(300, 300, weatherUK.main.temp, weatherUK.main.temp); //england
ellipse(500, 300, weatherDK.main.temp, weatherDK.main.temp); //denmark
ellipse(700, 300, weatherMX.main.temp, weatherMX.main.temp); //mexico
ellipse(900, 300, weatherLB.main.temp, weatherLB.main.temp); //libya
}

}

function tempUK() {
on = true;
fill(0);
text(weatherUK.main.temp + "°C", 275, 200);
}

function tempDK() {
on = true;
fill(0);
text(weatherDK.main.temp + "°C", 478, 200);
}

function tempMX() {
on = true;
fill(0);
text(weatherMX.main.temp + "°C", 678, 200);
}

function tempLB() {
on = true;
fill(0);
text(weatherLB.main.temp + "°C", 880, 200);
}