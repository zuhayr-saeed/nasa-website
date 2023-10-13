var f = 0;
function setup() {
  createCanvas(windowWidth, 200);
}

function draw() {
  background(0); // Black background

  // Draw stars
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    stroke(255);
    point(x, y);
  }

  draw=_=>{
    f++?background(0):createCanvas(W=500,W)
    noStroke()
    for(x=-W;x<W;x+=5) {
      for(n=0;n<30;n++){
        d=(f+n+9e3)*5*noise(x)%600-50
        100<x+d&x+d<400&100<d&d<400&&circle(x+d,d,n/6)
    }
    }
  }
 
}
