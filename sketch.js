var song = new Audio("song.mp3");


function setup () {
let canvas = createCanvas(800,600);
canvas.position(155,35);
frameRate(1);

}


function draw () {

// background();
for (let i = 0; i < 50; i++){
let r = random(600);
fill(255);
noStroke();
ellipse(i, , 20, 20);

}


}


function xSong(){
	song.play();
}