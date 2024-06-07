// Coding Challenge 130.1: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130-fourier-transform-drawing.html
// https://youtu.be/MY4luNgGfms


let x = [];
let y = [];
let fourierX;
let fourierY;
let time = 0;
let path = [];
let wave = [];
var volhistory = [];

var song;
var fft;
var button;
var data = [];
var dataset = [];


function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('this-dot-kp.mp3');
}



let slider;

function setup() {
    createCanvas(600, 400);
    button = createButton('toggle');
    button.mousePressed(toggleSong);
    song.play();
    amp = new p5.Amplitude();
}

function draw() {
    background(0);
    translate(200, 200);

    radius = 100;

    stroke(255);
    noFill();
    ellipse(0,0,radius*2);

    let x = radius * cos(time);
    let y = radius * sin(time);
    // wave.unshift(y);
    line(0,0,x,y);
    fill(255);
    ellipse(x,y,8);



    var vol = amp.getLevel();
    volhistory.push(vol);
    // console.log(vol);

    

    // beginShape();
    // noFill();
    for(let i = 0 ; i < volhistory.length; i++){
        yMap = map(volhistory[i], 0,1, height/2, 0);
        wave.unshift(yMap);
        // vertex(i,yMap -200);
    }
    // endShape();



    translate(200,0);
    line(x-200, y, 0 ,wave[0] -200);
    beginShape();
    noFill();
    for(let i = 0 ; i < wave.length; i++){
        vertex(i,wave[i]-200);
    }
    endShape();

    time += 0.05;
}





