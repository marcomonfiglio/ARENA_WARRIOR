let Ryan=10
function setup() {

	createCanvas(1000, 550);
  rectMode(CENTER);
}

function draw(){
  push();
  background(240);
  translate(mouseX,mouseY)
  rotate(radians(Ryan));
  fill(0)
  rect(0,0,100,100)
  Ryan= Ryan+5
  pop();

}












//for(x=10; x<975; x=x+75){
    //for(y=10; y<500; y=y+75){
        //push();translate(x,y)
        //Square();
        //pop();
    //}
  //}
//}

//function Square() {
  //rect(10,10,20,20,5);
//}
