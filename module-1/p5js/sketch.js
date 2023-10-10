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
}
