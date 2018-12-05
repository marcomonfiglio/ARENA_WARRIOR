//create an empty array called balls
let balls = [];
let y1=20
let y2=70
let difficulty
let paddleSpeed=10
let score1=0
let score2=0
//let serveDirection
//let server
//let serveLocation


function setup() {
  	createCanvas(1350, 600);
}

function draw(){
  background(255)
  strokeWeight(10);
  stroke("black");
  fill(255);
  rect(0,5,1326,590);
  strokeWeight(10);
  stroke("black");
  rect(0,5,663,590);
  strokeWeight(1)
    fill(0)
    textSize(30)
    text('Score 1',525,50)
    textSize(30)
    text(score1,525,85)
    fill(0)
    textSize(30)
    text('Score 2',700,50)
    textSize(30)
    text(score2, 700, 85)
  paddle1();
  paddle2();
    y1=y1+paddleSpeed
    y2=y2+paddleSpeed
if(y2>=580){
  paddleSpeed=-paddleSpeed
  }
  if(y1<=0){
    paddleSpeed=-paddleSpeed
  }



//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
      balls[i].drawBall();
      balls[i].moveBall();
    	balls[i].bounceBall();
      balls[i].Score();

	  }
}
  function keyTyped() {//taken from p5.js reference
  if (key === 'r') {
    score1=0
    score2=0
  }
}


function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  if (key==='b') {
    let  b = new Ball(625, 200, 5,0.5, random(-2,2), false);//MAKE A SERVING X VALUE
    balls.push(b);
    console.log(balls); //print the balls array to the console
  }
}

// make the paddle and attach it to the mouse
function paddle1(){
  stroke("black");
  strokeWeight(10);
  line(1250,mouseY-25,1250,mouseY+25);
}

function paddle2(){
  stroke("blue");
  strokeWeight(10);
  line(50,y1,50,y2);

}



//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speedx, speedy, randomSpeed, scored){
		this.x = x;
    this.y = y;
    this.speedx = speedx;
    this.speedy = speedy;
    this.randomSpeed = randomSpeed;
    this.scored = scored;

	}

	// draw a ball on the screen at x,y
	drawBall(){
    		stroke(0);
        	strokeWeight(1);
    		fill("red");
		ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speedx;
		this.y = this.y+ this.speedy;
	}

	//if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= 1235 && this.x <= 1265 && this.y > mouseY-30 && this.y < mouseY+30){
      			this.speedx = -this.speedx;
            this.speedy = this.randomSpeed;
    		}
         if (this.x>= 35 && this.x <= 65 && this.y > y1 && this.y< y2){
           this.speedx = -this.speedx
           this.speedy = this.randomSpeed
         }
         if(this.y<=0+10) {
           this.speedy = -this.speedy
         }
         if(this.y>=600-20){
           this.speedy=-this.speedy
         }

  	}

    Score(){
      if (this.x>=1350-5 && this.scored == false) {
           score1=score1+1;
           console.log("score!")
           this.scored = true;
         }
         if (this.x<=0+5 && this.scored == false){
           score2=score2+1;
           console.log("score!")
           this.scored = true;
         }
       }
}
