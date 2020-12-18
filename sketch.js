
var audio = new Audio("song.mp3");

function xSong(){
	 	audio.play();
	}



var myCanvas = function (a) {

	var yPos = [];
	var xPos = [];
	var speed = [];


	a.setup = function () {
		let canvas = a.createCanvas(800,600);
		canvas.position(295,80);
		canvas.parent("myCanvas");

		for (var j = 0; j < 100; j++){
			xPos[j] = a.random(a.width);
			yPos[j] = 0;
			speed[j] = a.random(10);
		}
	}


	a.draw = function() {

		a.background(123,187,242);
		a.noStroke();

		for (var i = 0; i < 100; i++){
			a.fill(255);
			a.ellipse(xPos[i], yPos[i], 5, 5);
			yPos[i] = yPos[i] + speed[i];

			if (yPos[i]>a.height){
				yPos[i] = 0;
			}
		}
	 	
	}

}

var myCanvasP5 = new p5 (myCanvas);
var canvas;

var lastPage = function (b){
	b.setup = function() { 

				canvas = b.createCanvas(800,600);
				canvas.parent("lastPage");
				canvas.position(174,50);
				
				b.strokeWeight(4);
				b.stroke(51);
				b.fill (b.random (255), b.random(255), b.random(255));
				b.ellipse (270,500,30,30);
				b.ellipse (190,495,30,30);
				b.ellipse (240,455,30,30);
				b.ellipse (200,425,30,30);
				b.ellipse (230,350,30,30);
				b.ellipse (260,398,30,30);
				b.ellipse (290,455,30,30);

				b.mouseClicked = function(){
					b.strokeWeight(4);
					b.stroke(51);
					b.fill (b.random (255), b.random(255), b.random(255));
					b.ellipse (270,500,30,30);
					b.ellipse (190,495,30,30);
					b.ellipse (240,455,30,30);
					b.ellipse (200,425,30,30);
					b.ellipse (230,350,30,30);
					b.ellipse (260,398,30,30);
					b.ellipse (290,455,30,30);
			} 

	b.draw = function() {

				
				}
					
			}

}

var myCanvasP5 = new p5 (lastPage);
var canvas;

let rectangle1;
let rectangle2;
let rectangle3;
let ellipse1;
let ellipse2;
let ellipse3;

var ornaments = function(c) {

		c.setup = function() { 
  			let canvas = c.createCanvas(800,600);
			canvas.parent("ornaments");
			canvas.position(295,80);

			c.strokeWeight(4);
			c.stroke(51);
			c.fill (c.random (255), c.random(255), c.random(255));
			rectangle1 = new Draggable(270,500,30,30);
			rectangle2 = new Draggable(190,495,30,30);
			rectangle3 = new Draggable(240,455,30,30);
			ellipse1 = new Draggable(200,425,30,30);
			ellipse2 = new Draggable(230,350,30,30);
			ellipse3 = new Draggable(260,398,30,30);
			
		} 

		c.draw = function() { 
			rectangle1.over();
			rectangle1.update();
			rectangle1.show();

			rectangle2.over();
			rectangle2.update();
			rectangle2.show();

			rectangle3.over();
			rectangle3.update();
			rectangle3.show();

			ellipse1.over();
			ellipse1.update();
			ellipse1.show();

			ellipse2.over();
			ellipse2.update();
			ellipse2.show();

			ellipse3.over();
			ellipse3.update();
			ellipse3.show();

		}

		c.mousePressed = function(){
			rectangle1.pressed();
			rectangle2.pressed();
			rectangle3.pressed();
			ellipse1.pressed();
			ellipse2.pressed();
			ellipse3.pressed();
		}

		c.mouseReleased = function(){
			rectangle1.released();
			rectangle2.released();
			rectangle3.released();
			ellipse1.released();
			ellipse2.released();
			ellipse3.released();
		}

}

var myCanvasP5 = new p5 (ornaments);
		

 