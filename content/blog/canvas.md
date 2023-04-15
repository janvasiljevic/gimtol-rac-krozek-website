---
external: false
title: Risanje na platno in zunanje knjižnice
description: Risanje na platno in zunanje knjižnice
date: 2023-03-17
draft: false
---

Da ne bomo samo gledali številk in nizev v konzoli, se bomo naučili na zaslon izrisati in premikati enostavne oblike kot so kvadrati, elipse, črte itd.
JavaScript nam v povezavi s HTML-jem omogoča risati na `canvas` oziroma `platno`. Platno moramo sprva definirati v HTML datoteki, nato pa lahko s pomočjo JavaScripta po njem rišemo. V `index.html` poleg elementa `<script>` dodamo `<canvas>`.

```html
<!-- index.html -->
<canvas
    id="platno"
    width="600"
    height="400"
    style="border: 1px solid black"
></canvas>
<script src="koda.js"></script>
```

Sedaj imamo na strani platno, veliko 600x400 pikslov z identifikatorjem `platno`.

Sedaj lahko s pomočjo JavaScripta na platno narišemo rdeč kvadrat in moder krog.

```js
// koda.js
const platno = document.getElementById("platno");
const ctx = platno.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 100, 100);

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fill();
```

Opazimo, da je za izris le dveh likov potrebno kar veliko dela. Stvar se bi še bolj zakomplicirala pri dodajanju uporabniških vnosou ter premikanju likov. V ta namen bomo uporabili `knjižnico` [p5.js](https://p5js.org/), ki nam zelo olajša risanje na platno.

# p5.js

[p5.js](https://p5js.org/) je zunanja knjižnica, zato jo moramo pred uporabo dodati v HTML datoteko. Knjižnico najlažje dodamo z uporabo `CDN`-a.

```html
<!-- index.html -->
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"
    integrity="sha512-3RlxD1bW34eFKPwj9gUXEWtdSMC59QqIqHnD8O/NoTwSJhgxRizdcFVQhUMFyTp5RwLTDL0Lbcqtl8b7bFAzog=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
></script>
<script src="koda.js"></script>
```

Dodali smo samo še en `<script>` element poleg naše `koda.js`. Vidimo, da je pri novem elementu atribut `src` spletna povezava na kateri se nahaja koda knjižnice `p5.js`. Drugi atributi so uporabljeni za zagotavljanje varnosti, vendar o njih ne bomo podrobneje govorili.

Sedaj lahko začnemo uporabljati knjižnico `p5.js`. V `koda.js` naredimo dve funkciji: `setup()` in `draw()`. Funkcijo `setup` bo knjižnica poklicala enkrat, na začetku izvajanja programa, funkcijo `draw` pa privzeto 60x na sekundo.

```js
function setup() {
    // to se izvede enkrat
}

function draw() {
    // to se izvede privzeto 60 krat na sekundo
}
```

V funkciji `setup` naredimo vse potrebno za delovanje programa. Zaenkrat bomo v tej funkciji naredili platno z uporabo funkcije `createCanvas(sirina, visina)` in nanj narisali krog s funkcijo `circle`. Vse funkcije knjižnice `p5.js` lahko najdemo v njeni [`dokumentaciji`](https://p5js.org/reference/).

```js
function setup() {
    createCanvas(600, 400);
    circle(50, 50, 80); // x y r
}
```

> Prva dva argumenta v funkciji `circle` sta `x` in `y` koordinati. Izhodišče `x=0, y=0` je v zgornjem levem kotu platna. `x` se veča v desno, `y` pa dol. Spodnji desni kot platna ima tako koordinato `x=WIDTH-1, y=HEIGHT-1`.

Sedaj imamo na platnu črn krog. Kaj pa če bi želeli krog premikati po zaslonu? V ta namen bomo funkcijo `circle` malce spremenili in premaknili v `draw`.

```js
function draw() {
    circle(mouseX, mouseY, 50);
}
```

Sedaj lahko z miško "rišemo" po platnu. Opazimo, da se platno ne pobriše pred vsakim klicem funkcije `draw`. To lahko naredimo s funkcijo `background`, ki celotno ozadje pobarva z isto barvo.

```js
function draw() {
    background(255);
    circle(mouseX, mouseY, 50);
}
```

> `mouseX` in `mouseY` sta spremenljivki, ki jih nastavi knjižnica `p5.js`. V navadni JavaScript kodi sta ti dve spremenljivki `undefined`. Takšnih spremenljivk je še veliko - glej dokumentacijo.

Trenutno je naš krog črn. Za spremebo barve lahko uporabimo funkcije kot sta `stroke` in `fill`.

```js
function draw() {
    background(255);

    strokeWeight(4);
    stroke(255, 0, 0);
    fill(0, 0, 255);

    circle(mouseX, mouseY, 50);
}
```

`strokeWeight` je nastavila debelino robu, `stroke` barvo robu, `fill` pa barvo notranjosti.

Knjižnica `p5.js` ima ogromno funkcij, o katerih bi lahko pisal veliko časa, vendar je bolje odpreti [dokumentacijo](https://p5js.org/reference/) in pogumno začeti reševati naloge.

## Naloge

-   Poglej po dokumentaciji in nariši še ostale enostavne like (elipsa, trikotnik, kvadrat, pravokotnik...), črto in točko. Vsak lik nariši z drugo barvo.
-   Nariši lik, ki pada po platnu navzdol. Ko pride do dna, ga ponovno premakni na vrh. Njegova `x` koordinata pa naj sledi miški.
-   Nariši lik in ga nato premikaj po zaslonu z `wasd` ali puščicami.
-   Naredi poenostavljeno verzijo slavnega slikarja (MS Paint). Riši dokler je pritisnjen levi gumb na miški. S pomočjo tipkovnice menjaj med nekaj različnimi barvami.

## Težje naloge

-   Poskušaj narisati nekaj takega: ![circles](/assets/img/circles.png)
-   Poskušaj narisati [fraktalno drevo](https://en.wikipedia.org/wiki/Fractal_canopy).
