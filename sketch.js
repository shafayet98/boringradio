
let x = [];
let y = [];
let time = 0;
let wave = [];
var pauseSong;
var myCanvas;

var song;
var fft;
var button;
var data = [];
var dataset = [];

var itzy_freaky, ive_baddie, ls_smart, ls_impurities
var ls_easy, ive_off_the_record, bol4_some, kep1er_another_dream;

function preload() {
    itzy_freaky = loadSound('songs/itzy_freaky.mp3');
    ive_baddie = loadSound('songs/ive_baddie.mp3');
    ls_smart = loadSound('songs/ls_smart.mp3');
    ls_impurities = loadSound('songs/ls_impurities.mp3');
    ls_easy = loadSound('songs/ls_easy.mp3');
    ive_off_the_record = loadSound('songs/ive_off_the_record.mp3');
    bol4_some = loadSound('songs/bol4_some.mp3');
    kep1er_another_dream = loadSound('songs/kep1er_another_dream.mp3');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function setup() {

    if (windowWidth < 520) {
        resizeCanvas();
        console.log("Here");
    } else {
        myCanvas = createCanvas(600, 200);
    }
    myCanvas.parent("containsCanvas");

    song = bol4_some;
    song.play();
    div = createP('pause()');
    div.parent("pause");
    div.mousePressed(toggleSong);
    amp = new p5.Amplitude();

}

function draw() {
    background(32, 32, 32);
    translate(100, 100);

    let r = random(255);
    let g = random(255);
    let b = random(255);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 3; i++) {
        let prevx = x;
        let prevy = y;

        let n = i * 2 + 1;
        let radius = 45 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255);
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
    stroke(r, g, b);
    line(x - 200, y, 0, wave[0] - 100);

    beginShape();
    // noFill();
    fill(r, g, b);
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





