
let movement=0
let jumpValue=0
let gravity=0
let timer=0
let characterx
let charactery
let death=0
let weaponx
let weaponSide=7
let weaponSide2=310
let weaponSide3=50
let attackWeapon2=0
let attackWeapon=0
let attackBase=0
let attackHead=0
let adjust=4
let adjust2=1.5
let rotated=false
let slow=0


function setup(){
createCanvas(1350,600)

}

function draw(){
  characterx=200+movement
  charactery=500-jumpValue+gravity
  weaponx=characterx+weaponSide
STAGE();
CHARACTER1();
HORIZONTAL();
GRAVITY();
PLATFORM();
DEATH();
ATTACK();
JUMP();
RESET()
if(keyIsDown(32)){
  rotated=true
}
else{
  rotated=false
}
}
function STAGE(){
  background(255)
  fill(255)
  stroke("black")
  strokeWeight(25)
  rect(0,0,1325,600)
  line(150,523,500,523)
  line(800,523,1200,523)
  line(450,200,850,200)

}

function HORIZONTAL(){
  if(keyIsDown(LEFT_ARROW)){
    movement= movement-5
    weaponSide=-10
    weaponSide2=130
    weaponSide3=230
    adjust=4
    adjust2=1.5
  //  attackWeapon
  }
  if(keyIsDown(RIGHT_ARROW)){
    movement=movement+5
    weaponSide=7
    weaponSide2=310
    weaponSide3=50
    adjust=0
    adjust2=0
  }
}

function CHARACTER1(){
  fill(0,255-death,0)
  noStroke()
  ellipse(characterx,charactery,20,20)
  ellipse(characterx, charactery-20,20,20)
  //WEAPONBASE()
  //WEAPONHEAD()
//  ATTACKBASE()
//  ATTACKHEAD()
}


  function ATTACK(){
    if(rotated==true){
      ATTACKBASE()
      ATTACKHEAD()
    }
    else{
      if(rotated==false){
        WEAPONBASE()
        WEAPONHEAD()
      }
    }
  }

function ATTACKBASE(){
  fill("black")
  rect(weaponx- (2*adjust), charactery-10,10,5)
  fill(109,73,25)
  rect(weaponx+10-(9*adjust),charactery-10,20,5)
}

function ATTACKHEAD(){
  fill("grey")
arc(weaponx+(10*(3-adjust-adjust2)),charactery-10,20,20,radians(45),radians(135))

}

function WEAPONBASE(){
  fill("black")
  rect(weaponx,charactery-10,5,10)
  fill(109, 73, 25)
  rect(weaponx,charactery-30,5,20)
}

function WEAPONHEAD(){
  fill("grey")
  arc(weaponx+adjust,charactery-30,20,20,radians(weaponSide2),radians(weaponSide3))
}


function JUMP(){
  if(keyIsDown(UP_ARROW)){
    jumpValue=jumpValue+10-slow
    slow=slow+0.05
    }
  }

function RESET(){
    if(characterx>450 && characterx<850 && charactery<=200 && charactery>=175){
      charactery=200
      jumpValue=jumpValue
      slow=0
    }
  if(characterx>150 && characterx<500 && charactery<=525 && charactery>=498){
      charactery=500
      jumpValue=jumpValue
      slow=0
    }
    if(characterx>800 && characterx<1200 && charactery<=525 && charactery>=500){
      charactery=500
      slow=0
      jumpValue=jumpValue
    }
  }
//}



  function GRAVITY(){
    if(500-jumpValue+gravity<600){
      gravity=gravity+4
    }
  }

  function PLATFORM(){
    if(characterx>450 && characterx<850 && charactery<=200 && charactery>=175){
      gravity=gravity-4
    }
    if(characterx>150 && characterx<500 && charactery<=525 && charactery>=498){
      gravity=gravity-4
    }
    if(characterx>800 && characterx<1200 && charactery<=525 && charactery>=500){
      gravity=gravity-4
    }
  }

  function DEATH(){
    if(charactery>=585){
      death=255
      }
    if(charactery<=585 && charactery>=20){
      death=0
      }
    if(charactery<20){
      death=255
      }
  }
