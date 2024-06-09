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
    var myCanvas = createCanvas(600, 200);
    myCanvas.parent("containsCanvas");


    button = createButton('toggle');
    button.mousePressed(toggleSong);
    song.play();
    amp = new p5.Amplitude();
}

function draw() {
    background(32, 32, 32);
    translate(100, 100);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 2; i++) {
        let prevx = x;
        let prevy = y;

        let n = i * 2 + 1;
        let radius = 45 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);

        //fill(255);
        stroke(255);
        line(prevx, prevy, x, y);
        ellipse(x, y, 8);
    }

    var vol = amp.getLevel();
    yMap = map(vol, 0, 1, height / 2, 0);
    wave.unshift(yMap);
    
    // volhistory.push(vol);

    // for (let i = 0; i < volhistory.length; i++) {
    //     yMap = map(volhistory[i], 0, 1, height / 2, 0);
    //     wave.unshift(yMap);
    // }
    
    translate(200, 0);
    line(x - 200, y, 0, wave[0] - 100);

    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i] - 100);
    }
    endShape();

    time += 0.05;
    // console.log(time);

    if (wave.length > 250) {
        wave.pop();
    }
}





