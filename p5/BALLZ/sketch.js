//create an empty array called balls
let balls = [];

function setup() {
  createCanvas(800, 400);
}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
        balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
    let  b = new Ball(400,100,10,10);
    balls.push(b);
    console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,directionx,directiony){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.directionx= directionyx
        this.directiony=directiony
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("red");
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x-this.directionx;
		this.y = this.y-this.directionyx;
	}


}
