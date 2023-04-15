/** Setup se izvede enkrat na zacetku. */
function setup() {
  smileySetup(); // Zamenjaj z svojo funkcijo.
}

/** Draw se izvede 60x na sekundo. */
function draw() {
  smileyDraw(); // Zamenjaj z svojo funkcijo.
}

function smileySetup() {
  createCanvas(400, 400);
}

function smileyDraw() {
  // nastavi barvo na belo
  fill(255, 255, 255);
  // nastavi barvo obrobe na modro
  stroke(0, 0, 255);

  // risi krog na mesto kjer je miska
  ellipse(mouseX, mouseY, 50, 50);

  // nastavi barvo obrobe na crno
  stroke(0, 0, 0);

  // obraz
  ellipse(200, 200, 300, 300);

  // nastavi barvo na crno
  fill(0, 0, 0);

  // narisi oci
  ellipse(150, 150, 50, 50);
  ellipse(250, 150, 50, 50);

  // usta
  arc(200, 250, 100, 100, 0, PI);
}
