var listOfColors;
var Bground;
function setup() {
  createCanvas(1600, 800);
  background(255);

  listOfColors = [color('#ff0000'), color('#0000ff'), color('#31a552'), color('#ffe926'), color('#ffffff')];

  for (var row = 0; row <= 4; row++) {
    push();
    if(row % 2 == 0) {
      console.log("row " + row);
      for (var col = 1; col <= 4; col++) {
          BGROUND();
          translate(300,0);
          console.log(Bground);
        }
  }else{
    console.log("row " + row);
    push()
      for (var col = 1; col <= 3; col++){
        translate(150,0);
        BGROUND();
        translate(150,0);
        console.log(Bground);
      }
    }
pop(); //restore state of canvas before the x translations
translate(0, 100); //translate in Y (down-up)
  }
}

function BGROUND() {
  Bground= [int(random(0,2))];
    if(Bground==0) {
      fill(listOfColors[int(random(0, listOfColors.length))]);
      rect(50,50,210,120)
  }else{
    if(Bground=1){
      var stripe = [int(random(2,5))]
      console.log("stripe"+stripe)
      if(stripe==3){
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(50,50,70,120)
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(120,50,70,120)
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(190,50,70,120)
    }else{
      if(stripe==2){
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(50,50,105,120)
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(155,50,105,120)
    }else{
      if(stripe=4){
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(50,50,50,120)
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(100,50,50,120)
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(150,50,50,120)
        fill(listOfColors[int(random(0, listOfColors.length))]);
        rect(200,50,50,120)
            }
          }
        }
      }
    }
  }
