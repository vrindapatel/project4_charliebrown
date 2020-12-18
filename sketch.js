var song = new Audio("song.mp3");
var yPos = [];
var xPos = [];
var speed = [];


function setup () {
let canvas = createCanvas(800,600);
canvas.position(155,35);


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

	// document.getElementById("pagetwo") = function mouseClicked(){
	// 	if(dist(circleX, circleY, mouseX, mouseY)< diameter/2 && mouseIsPressed){
 //   			fill(50);
 //   			circleX = mouseX;
 //   			circleY = mouseY;
 //   		}
   
  
 //     	ellipse(circleX, circleY, diameter,diameter);

	// }
 	
}

function xSong(){
 	song.play();
}
 