let platform=[]
let movement=0
let jumpValue=0
let gravity=0
let timer=0
let randomx=200
let randomy=


function setup(){
createCanvas(1350,600)
timer=1
}

function draw(){
STAGE();
CHARACTER1();
HORIZONTAL();
GRAVITY();
JUMP();

for (let i = 0; i < platform.length; i++) {
    platform[i].drawPlatform();
  }
  if(timer==1){
    let p= new PLATFORM(700+randomx,random(100,500),700-randomx,)
    platform.push(p)
  }

}
function STAGE(){
  background(255)
  fill(255)
  stroke("black")
  strokeWeight(25)
  rect(0,0,1325,600)

}

function HORIZONTAL(){
  if(keyIsDown(LEFT_ARROW)){
    movement= movement-5
  }
  if(keyIsDown(RIGHT_ARROW)){
    movement=movement+5
  }
}

function CHARACTER1(){
  fill(0,255,0)
  noStroke()
  ellipse(100+movement,500-jumpValue+gravity,20,20)
}

function JUMP(){
  if(keyIsDown(UP_ARROW)){
    jumpValue=jumpValue+10
    }
  }


  function GRAVITY(){
    if(500-jumpValue+gravity<500){
      gravity=gravity+4
    }
  }

  class PLATFORM{
    constructor(x1,y1,x2,y2){
    this.x1 =x1
    this.y1 =y1
    this.x2=x2
    this.y=y2

    }

  drawPLATFORM(){
    stroke("black")
    strokeWeight(25)
    line(this.x1,this.y1,this.x2,this.y2)

  }
  }
