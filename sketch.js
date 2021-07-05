
let capture;

function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
 capture.hide();
}

function draw() {
  image(capture, windowWidth/2, 0,windowWidth/2,windowHeight);
  filter(INVERT);
  
  image(capture, 0, 0,windowWidth/2,windowHeight);
}