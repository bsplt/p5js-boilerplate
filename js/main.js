function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    text("put your p5.js code here",10, frameCount % height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
