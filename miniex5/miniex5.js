var titles = [];
var song;

function preload() {
    titles = loadStrings("assets/haiku.txt");		//text & sound from assets
    titles1 = loadStrings("assets/haiku2.txt");
    titles2 = loadStrings("assets/haiku3.txt");
    song = loadSound("assets/zen.mp3");
 }

function setup() {
    createCanvas(800, 600); 
    song.play();
    song.setVolume(1);
    }

function draw() {									//background & text specifications
	background('#fae');
    textSize(50);
    textStyle(ITALIC);
    text("Font Style Italic")
    
	textAlign(CENTER);								//centered text
							
	var m1 = match(titles[0], "u");					//text line 1 with colour match
	if (m1 != null) {
		fill(0);
	} else {
		fill(255);
	}
	text(titles[0], width/2, 150);
	
	var m1 = match(titles1[0], "u");				//text line 2 with colour match
	if (m1 != null) {
		fill(0);
	} else {
		fill(255);
	}
	text(titles1[0], width/2, 300);
	
	var m1 = match(titles2[0], "u");				//text line 3 with colour match
	if (m1 != null) {
		fill(0);
	} else {
		fill(255);
	}
	text(titles2[0], width/2, 450);
	
}
	
	function mousePressed() {						//shuffle text with mousepress
	shuffle(titles, true);
	shuffle(titles1, true);
	shuffle(titles2, true);
	
}
