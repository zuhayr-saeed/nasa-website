let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let volumeControl = document.getElementById('volume');
  let bgMusic = document.getElementById('bgMusic');
  
  // Set the initial volume to half (0.5)
  bgMusic.volume = 0.5;

  volumeControl.addEventListener('input', () => {
    bgMusic.volume = volumeControl.value;
  });
  
  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  for (let star of stars) {
    star.update();
    star.display();
  }
}

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - 10;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  display() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);
    fill(255);
    noStroke();
    ellipse(sx, sy, r, r);
    
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    stroke(255);
    line(px, py, sx, sy);
  }
}
