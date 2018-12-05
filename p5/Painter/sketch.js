let opacity=255
color
function setup() {
  // put setup code here
  createCanvas(1335,655)
  background(80)
}

function draw() {
  //textSize(10)
  //text("Jed", mouseX, mouseY)
  //fill(0,255,0,opacity)

    noStroke()
    ellipse(mouseX, mouseY,25,25)
    fill(0,255,0,opacity)
}
function mousePressed() {
  loop();
  background(80)
}
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    opacity = 0;
  } else if (keyCode === RIGHT_ARROW)
    opacity = 255
  }
