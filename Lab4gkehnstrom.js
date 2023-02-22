function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  myTriangle(30, 75, 58, 20, 86, 75, 255, 0, 0);
  mySprite1(100, 100, 50, 50, 0, 0, 225);
  mySprite2(150, 150, 80, 80, 0, PI + QUARTER_PI, 0, 0, 225);
  bearPlanet();
}

function myTriangle(x1, y1, x2, y2, x3, y3, r, g, b) {
  fill(r, g, b);
  triangle(x1, y1, x2, y2, x3, y3);
}
function mySprite1(x, y, w, h, r, g, b) {
  fill(r, g, b);
  ellipse(x, y, w, h);
}
function mySprite2(x, y, w, h, start, stop, mode, detail, r, g, b) {
  fill(r, g, b);
  arc(x, y, w, h, start, stop, mode, detail);
}
function addPlanet(x, y, size) {
  push();
  noStroke();
  translate(x, y);
  scale(size);

  fill("coral");
  ellipse(50, 50, 100);
  // Northern latitude.
  fill("peru");
  arc(50, 50, 100, 100, 200, -20, OPEN);
  // Southern latitude.
  fill("tomato");
  arc(50, 50, 100, 100, 30, 150, OPEN);
  // North pole.
  fill("gold");
  arc(50, 50, 100, 100, 240, -60, OPEN);
  // South pole.
  fill("orange");
  arc(50, 50, 100, 100, 60, 120, OPEN);
  pop();
}

function addBear(x, y, size) {
  /*________ Baby bear. _______*/
  // Overall position and size.
  push();
  translate(x, y);
  scale(size);
  // Head.
  noStroke();
  fill("tan");
  ellipse(20, 20, 40);
  stroke("tan");
  strokeWeight(6);
  fill("beige");
  // Left ear.
  ellipse(0, 0, 15);
  // Right ear.
  ellipse(40, 0, 15);
  // Left eye.
  fill("dimgray");
  noStroke();
  arc(12, 13, 8, 10, 135, 35);
  // Right eye.
  arc(27, 13, 8, 10, 135, 35);
  // Nose.
  fill("rosybrown");
  ellipse(20, 22, 12, 7);
  pop();
}

function bearPlanet() {
  if (mouseIsPressed > 0) {
    addPlanet(300, 300, 1);
  } else {
    addBear(50, 300, 2);
  }
}
