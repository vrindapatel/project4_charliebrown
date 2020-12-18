

var lastPage = 

var song = new Audio("song.mp3");
var yPos = [];
var xPos = [];
var speed = [];


function setup () {
let canvas = createCanvas(800,600);
canvas.position(295,80);


	for (var j = 0; j < 100; j++){
		xPos[j] = random(width);
		yPos[j] = 0;
		speed[j] = random(9);
	}


}


function draw() {

	background(123,187,242);
	noStroke();

	for (var i = 0; i < 100; i++){
		fill(255);
		ellipse(xPos[i], yPos[i], 5, 5);
		yPos[i] = yPos[i] + speed[i];

		if (yPos[i]>height){
			yPos[i] = 0;
		}
	}
 	
}

function xSong(){
 	song.play();
}
 

 function setup() { 

				let canvas = createCanvas(800,600);
				canvas.position(174,50);
				strokeWeight(4);
				stroke(51);
				fill (random (255), random(255), random(255));
				ellipse (270,500,30,30);
				ellipse (190,495,30,30);
				ellipse (240,455,30,30);
				ellipse (270,655,30,30);
				ellipse (270,500,30,30);
			} 

			function draw() {

				function MouseClicked(){
					strokeWeight(4);
					stroke(51);
					fill (random (255), random(255), random(255));
					ellipse (270,500,30,30);
					ellipse (190,495,30,30);
					ellipse (240,455,30,30);
					ellipse (270,655,30,30);
					ellipse (50,50,50,50);
				}
					
			}