function setup() {
  createCanvas(1400, 700);
  background(80);
  rectMode(CENTER);
  //angleMode(DEGREES);
}
function draw() {

  push()
  translate(width/2,height/2 );
  let totalShapes=12
  let radius=10
  let xTwist=0
  for (var shape=0; shape<totalShapes; shape++) {
    push();
    translate(xTwist, radius);
    bezier(227, 179, 227, 287, 134, 125, 152, 247);
    pop();
    rotate(radians(360/totalShapes));
  }
  pop(); //restore not-radial state of canvas
}
