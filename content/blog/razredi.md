---
external: false
title: Razredi
description: Razredi in objekti.
date: 2023-04-01
draft: false
---

V prejšnjih lekcijah smo se naučili osnovnih konceptov, kot so spremenljivke, funkcije, pogoji in zanke. Sedaj pa se bomo naučili o razredih, ki so ena izmed najpomembnejših konceptov v programiranju.

> Obstoj (ali ne obstoj) razredov v programskih jezikih zelo definira njihovo uporabnost ter način pisanja. Po temu ločimo objektno usmerjene programske jezike (OOP) ostali pa so po večini proceduralno usmerjeni programski jeziki (POP).

Razredi so kot predloge, ki opisujejo lastnosti in vedenje določenega objekta. Objekti so lahko karkoli, na primer uporabnik na spletni strani ali pa izdelek v spletni trgovini. Razredi omogočajo, da lahko na enostaven način ustvarimo več objektov, ki imajo enake lastnosti in vedenje.

V nadaljevanju se bomo naučili, kako ustvarimo razred v Javascriptu, kako dodamo lastnosti in metode ter kako ustvarimo nove objekte iz razreda. S tem bomo razširili svoje znanje o programiranju in se pripravili na izdelavo bolj kompleksnih aplikacij.

## Razredi in objekti

Razred je predloga, ki opisuje lastnosti in vedenje določenega objekta. Predvsem skrbi za ustvarjanje objektov ter lepo sintakso za njihovo uporabo.

Za primer vzemimo objekt `vektor`, saj je v programiranju grafike pogosto uporabljen. Vektor je objekt, ki ima dve lastnosti, `x` in `y`.  
Poglejmo si kako bi to napisali v Javascriptu:

```js
let vektor = {
  x: 1,
  y: 1
}
```

S tem smo ustvarili eno instanco objekta vektor.

> Instnca je objekt, ki je ustvarjen po določenih pravilih, navadno po predlogi, ki jo določa razred.

Če bi želeli ustvariti še en vektor, bi morali ponovno napisati vse lastnosti in vrednosti. To bi bilo dolgočasno in bi lahko povzročilo napake. Poglejmo kako bi to naredili z objekti.

```js
let vektor = {
  x: 1,
  y: 1
}

let vektor2 = {
  x: 2,
  y: 2
}
```

Z razredi je to veliko bolj enostavno. Primer ki je funkcionalno enak kot prejšnji, bi bil:

```js
class Vektor {
  let x = 0;
  let y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let vektor = new Vektor(1, 1);
let vektor2 = new Vektor(2, 2);
```

Za razliko od objektov, ki smo jih ustvarili prej, smo v razredu definirali lastnosti `x` in `y`. Te lastnosti so na voljo vsem objektom, ki so ustvarjeni iz tega razreda. Poleg tega smo definirali tudi konstruktor, ki nam omogoča, da ustvarimo nove objekte iz razreda. Konstruktor je funkcija, ki se izvede, ko ustvarimo nov objekt iz razreda.

Novo instanco objekta ustvarimo z uporabo ključne besede `new`. V tem primeru smo ustvarili dva objekta, ki imata lastnosti `x` in `y`.  
Do lastnosti objekta lahko dostopamo z uporabo pike. Na primer `vektor.x` nam vrne vrednost `x` za objekt `vektor`.

Kadar želimo dostopti do atributov znotraj razreda, (recimo za dostopanje atributa x) uporabimo
rezervirano besedo `this`. Ta nam omogoča dostop do atributov in metod razreda. To lahko vidimo v primerih.

## Metode

Razredi nam omogočajo tudi definiranje funkcij, **ki delujejo na tem objektu**. Te funkcije se imenujejo **metode**.  

```js
class Vektor {
  let x = 0;
  let y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let vektor = new Vektor(2, 2);
console.log(vektor.length()); // 2.828
```

## Iheritance - dedovanje

Razredi lahko dedujejo lastnosti in metode iz drugih razredov. To nam omogoča, da lahko ustvarimo nove razrede, ki so podrazredi obstoječih razredov. S tem lahko elegantno uporabimo obstoječe razrede in jih razširimo z novimi lastnostmi in metodami.

### Primer

Radi bi definirali nekaj likov. Želeli bi imeti razred pravokotnik, ki bi imel lastnosti `width` in `height`. Poleg tega bi radi imeli metodo `area()`, ki nam vrne površino pravokotnika.

```js
class Pravokotnik {
  // atributi razreda
  let width = 0;
  let height = 0;
  
  // posebna metoda ( konstruktor ) ki se izvede ob ustvarjanju objekta
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // nasa metoda za izracun povrsine
  area() {
    return this.width * this.height;
  }
}
```

Ustvarimo dve instanci pravokotnika ter poglejmo njune površine:

```js
let pravokotnik1 = new Pravokotnik(10, 10);
let pravokotnik2 = new Pravokotnik(20, 20);

console.log(pravokotnik1.area()); // 100
console.log(pravokotnik2.area()); // 400
```

Imamo tudi željo, da bi imeli možnost ustvariti kvadrate. Kako bi to naredili na najboljši način?

Ker vemo da je **kvadrat** ubistvu samo bolj poseben **pravokotnik**, iz tega sledi, da lahko veliko stvari iz **pravokotnika** prenesemo na **kvadrat**.  Konstruktor bomo priredili tako, da bo namesto sirine in dolzine uporabil samo eno stranico. Metoda `area()` pa bo ostala enaka.

```js
// razred kvadrat deduje lastnosti in metode iz razreda pravokotnik
class Kvadrat extends Pravokotnik {
  // deduje atribute width in height

  // konstruktor kvadrata potrebuje le dolzino stranice
  constructor(stranica) {
    // rezervirana beseda super nam omogoca, da poklicemo konstruktor razreda, iz katerega dedujemo
    super(stranica, stranica); // beri: naredi pravokotnik z sirino {stranica} in dolzino {stranica}
  }

  // deduje metodo area()

  // dodamo novo metodo, ki nam vrne dolzino diagonale
  diagonal() {
    return Math.sqrt(2) * this.width;
  }
}

let kvadrat1 = new Kvadrat(10);

console.log(kvadrat1.area()); // 100
console.log(kvadrat1.diagonal()); // 14.142
```

## Dokumentacija

Razredi so zelo obsežna tema. Če želite izvedeti več o razredih, si lahko ogledate [dokumentacijo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).  
