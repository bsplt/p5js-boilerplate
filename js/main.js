function setup() {
    createCanvas(windowWidth, windowHeight);
    $("#defaultCanvas0").addClass("p5canvas");
}

function draw() {
    background(255);
    text("P5 goes here!",10, frameCount % height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
