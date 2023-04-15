---
external: false
title: Zanke
description: Zanke
date: 2023-02-17
draft: false
---

Če bi želeli v konzolo 5x izpisati določen niz, se bi najverjetneje sedaj tega problema lotili nekako tako:

```js
let stavek = "Dober dan";

console.log(stavek);
console.log(stavek);
console.log(stavek);
console.log(stavek);
console.log(stavek);
```

To sicer deluje, vendar je število ponovitev statično nastavljena (hardcoded). Prak tako tak pristop ni praktičnem, če bi želeli določene stavke izvesti stokrat, tisočkrat, milijonkrat ali pa celo večkrat. V ta namen imajo programski jeziki `zanke`. Zgornjo kodo bi lahko lažje zapisali takole:

```js
let stavek = "Dober dan";

for (let i = 0; i < 5; i++) {
  console.log(stavek);
}
```

Če se bi sedaj odločili stavek izpisati 1000x, bi morali spremeniti samo eno številko:

```js
let stavek = "Dober dan";

for (let i = 0; i < 1000; i++) {
  console.log(stavek);
}
```

Dajmo podrobneje opisati `sintakso` zanke `for`:

```js
for (inicializacija; pogoj; sprememba) {
  // koda se izvaja dokler je pogoj resničen (true)
}
```

Zanko začnemo s ključno besedo `for`. Nadaljujemo z oklepaji, v katerih definiramo:

- `inicializacijo` - nekaj kar se naj zgodi le enkrat, pred začetkom izvajanja zanke,
- `pogoj` - zanka bo izvajala kodo, dokler je pogoj `true`,
- `sprememba` - izvede se vedno po koncu vsake `iteracije` zanke.

Zgornji primer ima tako:

- `inicializacijo`: `let i = 0`, ki naredi novo spremenljivko `i` ter ji nastavi vrednost na 0,
- `pogoj`: `i < 5`, ki zanki pove, naj izvaja telo dokler je `i` manjši od 5,
- `spremembo`: `i++`, ki po vsaki iteraciji zanke poveča vrednost `i` za ena.

Sledimo poteku programa:

- `let i = 0` ustvari novo spremenljivko in ji dodeli vrednost 0,
- preverimo pogoj: `i < 5` je resnično, zato se lahko koda v zanki izvede,
- izvede se koda v zanki -> v konzolo se nam prvič izpiše `Dober dan`,
- po koncu telesa se izvede `sprememba`, `i` se poveča na 1,
- ponovno preverimo pogoj: `i < 5` še vedno velja, koda se ponovno izvede,
- v konzolo se nam drugič izpiše `Dober dan`,
- ponovno se `i` poveča za 1, sedaj ima vrednost 2,
- ...
- ko se nam v konzolo petič izpiše `Dober dan` je vrednost `i` enaka 4,
- `i` se ponovno poveča za 1, sedaj je 5,
- preverimo pogoj `i < 5`, ki pa je sedaj napačen, zanka se konča in nadaljujemo z kodo po zanki

Spremenljivko `i` lahko uporabimo v telesu zanke.

```js
for (let i = -2; i < 3; i++) {
  console.log(i);
}
```

```
Izpis:
-2
-1
0
1
2
```

> PAZI: to spremenljivko `i` lahko uporabimo samo v telesu zanke. Kjer koli drugje bomo dobili napako `i is not defined`.

Poleg zanke `for` poznamo še zanki `while` in `do while`. Zanka `while` izvaja telo, dokler je pogoj resničen. `do while` pa vedno vsaj enkrat izvede telo in šele nato preveri pogoj. Z zanko `do while` se ne bomo ukvarjali. Predstavimo zanko `while`.

```js
let pogoj = true;

while (pogoj) {
  // telo zanke
}
```

Zanka se začne s ključno besedo `while`, nato sledi pogoj v oklepajih. Zgornji primer bi kodo v telesu izvajal v nedogled, razen če bi znotraj zanke spremenili vrednost spremenljivke `pogoj` na `false` ali uporabili ključno besedo `break`.

Za delo z zankami poznamo še dve ključni besedi:

- `break` takoj preneha z izvajanjem zanke,
- `continue` preskoči trenutno iteracijo in nadaljuje s `spremembo`.

```js
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    break;
  }

  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
```

```
Izpiše:
1
3
5
```

Ponovno pojdimo počasi skozi zanko:

- `i` dobi vrednost 0,
- prvi `if` stavek se ne izvede, izvede se `continue` v drugem `if` stavku - preskoči preostanek telesa, zato ne izpiše 0,
- `i` se poveča na 1, noben izmed `if` stavkov se ne izvede, izpišemo 1,
- `i` se poveča na 2, izvede se drugi `if` stavek, ki prekoči preostanek telesa,
- `i` se poveča na 3, noben izmed `if` stavkov se ne izvede, izpišemo 3,
- `i` se poveča na 4, izvede se drugi `if` stavek, ki prekoči preostanek telesa,
- `i` se poveča na 5, noben izmed `if` stavkov se ne izvede, izpišemo 5,
- `i` se poveča na 6, izvede se `break` v prvem `if` stavku, zanka se zaključi kljub temu, da pogoj `i < 10` še vedno velja.

## Naloge

- Napiši funkcijo, ki sprejme 2 števili in izpiše vsa števila med njima.

```js
stevilaMed(-4, 3); // -4 -3 -2 -1 0 1 2 3
stevilaMed(3, -4); // 3 2 1 0 -1 -2 -3 -4
```

{% resitev %}

```js
function stevilaMed(a, b) {
  if (a > b) {
    for (let i = a; i >= b; i--) {
      console.log(i);
    }
  } else {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  }
}
```

{% /resitev %}

- Izpiši [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) za prvih 100 števil.

{% resitev %}

```js
for (let i = 1; i <= 100; i++) {
  let deljivoSTri = i % 3 === 0;
  let deljivoSPet = i % 5 === 0;

  if (deljivoSTri && deljivoSPet) console.log("FizzBuzz");
  else if (deljivoSTri) console.log("Fizz");
  else if (deljivoSPet) console.log("Buzz");
  else console.log(i);
}
```

{% /resitev %}

- Napiši funkcijo `delitelji(n)`, ki izpiše vse delitelje števila `n`.

{% resitev %}

```js
function delitelji(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
```

{% /resitev %}

- Napiši funkcijo `jePrastevilo(n)`, ki vrne logično vrednost `true`, če je `n` praštevilo, drugače `false`.

{% resitev %}

```js
function jePrastevilo(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
```

{% /resitev %}

- Z uporabo funkcije `jePrastevilo` izpiši prvih 50 praštevil.

{% resitev %}

```js
let steviloPrastevil = 0;
let trenutnoStevilo = 1;

while (steviloPrastevil < 50) {
  if (jePrastevilo(trenutnoStevilo)) {
    console.log(trenutnoStevilo);
    steviloPrastevil++;
  }

  trenutnoStevilo++;
}
```

{% /resitev %}

- Napiši funkcijo `vsotaStevk(n)`, ki vrne vsoto vseh števk v številu `n`. Pomagajte si s funkcijo `Math.floor()`.

{% resitev %}

```js
function vsotaStevk(n) {
  let vsota = 0;

  while (n > 0) {
    let stevka = n % 10;

    vsota += stevka;

    n = Math.floor(n / 10);
  }

  return vsota;
}
```

{% /resitev %}

- Napiši funkcijo `potenciraj(n, k)`, ki vrne `n^k` brez uporabe operatorja `**`.

{% resitev %}

```js
function potenciraj(n, k) {
  let rezultat = 1;

  for (let i = 0; i < k; i++) {
    rezultat *= n;
  }

  return rezultat;
}
```

{% /resitev %}

- Napiši funkcijo `collatz(n)`, ki izpiše [Collatzovo zaporedje](https://en.wikipedia.org/wiki/Collatz_conjecture) za podano število.Začnemo s številom `n`. Če je `n` sodo ga delimo z 2, v nasprotnem primeru ga pomnožimo s 3 in prištejemo 1. Postopek ponavljamo dokler ne dobimo 1.

{% resitev %}

```js
function collatz(n) {
  console.log(n);
  while (n != 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }

    console.log(n);
  }
}
```

{% /resitev %}

- Napiši funkcijo `trikotnikStevil(n)`. `trikotnikStevil(6)` naj izpiše:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
```

{% resitev %}

```js
function trikotnikStevil(n) {
  for (let i = 1; i <= n; i++) {
    let vrstica = "";

    for (let j = 1; j <= i; j++) {
      vrstica += j + " ";
    }
    console.log(vrstica);
  }
}
```

{% /resitev %}

- Napiši funckijo `smrekica(n)`, ki izpiše smrekico visoko `n` vrstic. `smrekica(5)` naj izpiše

```
    *
   ***
  *****
 *******
*********
```

{% resitev %}

```js
function smrekica(n) {
  for (let i = 0; i < n; i++) {
    let vrstica = "";

    for (let j = 0; j < n - i + 1; j++) {
      vrstica += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      vrstica += "*";
    }

    console.log(vrstica);
  }
}
```

{% /resitev %}
