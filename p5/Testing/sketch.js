var Decal
var centerDecal
function setup(){
  createCanvas(1600, 800);
  background(80);
  listOfColors = [color('#ff0000'), color('#0000ff'), color('#31a552'), color('#ffe926'), color('#ffffff')];
  specialColor = [color('#ffa100')];
  BGROUND();
  DECAL();
}
function BGROUND() {
  let Color1=listOfColors[int(random(0, listOfColors.length))];
  let Color2=listOfColors[int(random(0, listOfColors.length))];
  let Color3=listOfColors[int(random(0, listOfColors.length))];
    if(Color1==Color2){
       Color2=specialColor[int(random(0,specialColor.length))];
      }
      fill(255,255,255);//Color1);
      rect(50,50,210,120);
      fill(Color1);
      rect(50,50,210,40)
      fill(Color2);
      rect(50,90,210,40);
      fill(Color1);
      rect(50,130,210,40);
    }

function DECAL() {
  Decal= [int(random(0,1))];//location of center decal
  if(Decal==0) {//central decal
    centerDecal=[int(random(1,2))];//type of decal
    if(centerDecal==0){
    ellipse(155,110,50,50)
    }
    else if(centerDecal==1){
      push()
      translate(185,81)
      rotate(PI/3.25)
      fill(0,0,0)
      STAR(10,40,8,20,5);
      pop()
      console.log("STAR")
    }
  else if(Decal==1){
      fill(255,255,255);
      rect(50,50,90,80)
    }

  }
}
function STAR(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
