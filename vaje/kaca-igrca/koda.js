let sirinaPolja = 30;
let visinaPolja = 20;
let velikostKvadratka = 15;

let kaca = {
  smer: "dol",
  telo: [],
  najZrase: false,
};

let hitrostIgre = 15;

let sadje = {
  x: 0,
  y: 0,
};

let rezultat = 0;
let text;

function setup() {
  createCanvas(
    sirinaPolja * velikostKvadratka,
    visinaPolja * velikostKvadratka
  );

  text = createDiv(rezultat);

  background(0);

  let zacetenX = 15;
  let zacetenY = 5;

  for (let i = 0; i < 4; i++) {
    kaca.telo.push({ x: 0 + zacetenX, y: i + zacetenY });
  }

  spremeniSadje();

  frameRate(hitrostIgre);
}

// draw se poklice 60x na sekundo
function draw() {
  background(0);

  izrisiKaco();
  izrisiSadje();

  posodobiKaco();
  preveriSadje();

  if (jeKonecIgre()) {
    text.html("Konec...");
    noLoop();
  }
}

function spremeniSadje() {
  sadje.x = Math.floor(random() * sirinaPolja);
  sadje.y = Math.floor(random() * visinaPolja);
}

function izrisiSadje() {
  fill(0, 255, 0);
  square(
    sadje.x * velikostKvadratka,
    sadje.y * velikostKvadratka,
    velikostKvadratka
  );
  fill(255);
}

function vrniGlavo() {
  return kaca.telo[kaca.telo.length - 1];
}

function preveriSadje() {
  let glava = vrniGlavo();

  if (glava.x === sadje.x && glava.y === sadje.y) {
    spremeniSadje();
    hitrostIgre += 1;
    frameRate(hitrostIgre);
    rezultat += 1;

    text.html(rezultat);

    kaca.najZrase = true;
  }
}

// jeKonecIgre vrne true ko je konec igre, čene vrne false
function jeKonecIgre() {
  let glava = vrniGlavo();

  if (
    glava.x >= sirinaPolja ||
    glava.x < 0 ||
    glava.y >= visinaPolja ||
    glava.y < 0
  ) {
    return true;
  }

  for (let i = 0; i < kaca.telo.length - 4; i++) {
    let clen = kaca.telo[i];

    if (glava.x === clen.x && glava.y === clen.y) {
      return true;
    }
  }

  return false;
}

function izrisiKaco() {
  for (let i = 0; i < kaca.telo.length; i++) {
    let trenutniClen = kaca.telo[i];

    square(
      trenutniClen.x * velikostKvadratka,
      trenutniClen.y * velikostKvadratka,
      velikostKvadratka
    );
  }
}

function posodobiKaco() {
  if (kaca.najZrase) {
    kaca.najZrase = false;
  } else {
    kaca.telo.shift(); // pojemo rep
  }

  let zadnjiClen = kaca.telo[kaca.telo.length - 1];

  if (kaca.smer === "levo") {
    kaca.telo.push({ x: zadnjiClen.x - 1, y: zadnjiClen.y });
  } else if (kaca.smer === "desno") {
    kaca.telo.push({ x: zadnjiClen.x + 1, y: zadnjiClen.y });
  } else if (kaca.smer === "dol") {
    kaca.telo.push({ x: zadnjiClen.x, y: zadnjiClen.y + 1 });
  } else if (kaca.smer === "gor") {
    kaca.telo.push({ x: zadnjiClen.x, y: zadnjiClen.y - 1 });
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && kaca.smer !== "desno") {
    kaca.smer = "levo";
  } else if (keyCode === RIGHT_ARROW && kaca.smer !== "levo") {
    kaca.smer = "desno";
  } else if (keyCode === UP_ARROW && kaca.smer !== "dol") {
    kaca.smer = "gor";
  } else if (keyCode === DOWN_ARROW && kaca.smer !== "gor") {
    kaca.smer = "dol";
  }
}
