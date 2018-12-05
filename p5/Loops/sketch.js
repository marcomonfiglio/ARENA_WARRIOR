function setup() {
  let distance=100
  // put setup code here
  createCanvas(1300,650)
  background(200)
  fill(200,10,0);
for (let i = 1; i<30; i++) {
  rect(distance, 200, 55, 55, 20,);
  distance=distance+25
  }
}

function draw() {

  //drawGrid();
	//fill(0);
  //rect(60, 60, 100, 100);

  // put drawing code here
}
//function drawGrid() {
	//stroke(200);
	//fill(120);
	//for (var x=-width; x < width; x+=40) {
		//line(x, -height, x, height);
		//text(x, x+1, 12);
	//}
	//for (var y=-height; y < height; y+=40) {
		//line(-width, y, width, y);
		//text(y, 1, y+12);
	//}
//}
