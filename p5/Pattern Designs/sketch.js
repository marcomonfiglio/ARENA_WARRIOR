function setup() {
  createCanvas(800, 800);
  for (var row = 0; row <= 4; row++) {
    push();
    if(row % 2 == 0) {
      console.log("row " + row);
      for (var col = 1; col <= 6; col++) {
        if(col % 3==0) {
          fill(255,0,0) //first design
        }else if(col%3==2){
          fill(0,255,0)//second design
        }else {
          fill(0,0,255)//third designß
        }
        rect(5,5,50,50,10)
        translate(100, 0); //translate in X (left-right)
        console.log("drawing shape in row: " + row + " and column: " + col);
        }
  }else{
    console.log("row " + row);
      for (var col = 1; col <= 6; col++){
        if(col % 3==0) {
          fill(255,0,0)
        }else if(col%3==2){
          fill(0,255,0)
        }else {
          fill(0,0,255)
        }
        translate(50,0)
        rect(5,5,50,50,10)
        translate(50, 0); //translate in X (left-right)
        console.log("drawing shape in row: " + row + " and column: " + col);
      }
  }
  pop(); //restore state of canvas before the x translations
  translate(0, 100); //translate in Y (down-up)
  }
}
