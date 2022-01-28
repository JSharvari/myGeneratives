let x = 0;
let y = 0;
let i = 0;
let spacing = 30;

function setup() {
  createCanvas(400, 600);
  background(20, 30, 10, 10);
}

function draw() {
  stroke(0);
  if (random(0.6) < 0.5) {
    stroke(300);
    strokeWeight(0.6);
    fill(20, 40);
    triangle(200, 200, x, spacing / 80, x, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
