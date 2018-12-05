function setup(){
  createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw(){
  background(250);
  normalMaterial();
  rotateX(accelerationX * 1);
  rotateY(accelerationY * 1);
  box(100, 100, 100);
}
