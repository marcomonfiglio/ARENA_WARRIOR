let milonga="Jed"
let pace=99999998
function setup() {
  createCanvas(6000,4000);


}
function draw() {
background(80);
textSize(100)
text(milonga,200,100)
fill(0,255,0)
textSize(100)
text(pace,100,300)
fill(0,255,0)

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pace = 99999997;
  } else if (keyCode === RIGHT_ARROW) {
    pace = 10000000000000;
  }
}
