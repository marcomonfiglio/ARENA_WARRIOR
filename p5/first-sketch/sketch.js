function setup() {
createCanvas(1500,690);
background(0,10,0);  // put setup code here
}

function draw() {
fill(242,238,210,100)
ellipse(650,300,325,425)//head

strokeWeight(1);
stroke(0);
fill(255,255,255,100);//outside ellipses
ellipse(575,300,100,50);
fill(255,255,255,100);
ellipse(725,300,100,50);

noStroke();
fill(0,255,255,100);//two inside circles
ellipse(575,300,50,50);
fill(0,255,255,100);
ellipse(725,300,50,50);

fill(0,0,0,255);//pupils
ellipse(725,300,15,15);
fill(0,0,0,255);
ellipse(575,300,15,15);





  // put drawing code here
}
