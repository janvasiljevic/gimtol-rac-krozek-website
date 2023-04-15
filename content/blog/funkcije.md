---
external: false
title: Funkcije
description: Funkcije
date: 2023-01-29
draft: false
---

Pri programiranju velikokrat želimo na različnih mestih v kodi narediti določeno stvar (npr. izvesti neko določeno zaporedje ukazov). Če bi te ukaze pisali vedno sami, lahko pride do napake v le enem izmed ukazov, koda pa postane hitro nepregledna. Ko želimo spremeniti to zaporedje korakov, pa moramo to storiti povsod, kar je zelo zamudno. Prav tako obstaja nevarnost, da pozabimo spremeniti vse pojave teh ukazov.

Za rešitev tega problema poznamo `funkcije`, ki jih `definiramo` le enkrat v programu, nato pa jih lahko `kličemo` večkrat. Če sedaj želimo spremeniti vrstni red ukazov oz. popraviti napako, to storimo samo enkrat v funkciji.

> S funkcijo smo se srečali že prejšnji teden. Pri ukazu `console.log(niz)`, ki `niz` izpiše v konzolo, je `log()` funkcija objekta `console` (o objektih zaenkrat še ne bomo govorili). Ko smo v kodi zapisali `console.log(niz)` smo `poklicali` funkcijo `log`, ki je nato za nas izpisala `niz` na zaslon.

Za definicijo funkcije imamo v Javascriptu rezervirano besedo `function`. Besedi function sledi ime funkcije, nato navadni oklepaji. Telo funkcije se piše med zavitima oklepajema `{` in `}` (AltGr + b, AltGr + n).

```js
function hello() {
    console.log("Hello world");
}
```

Če zaženemo zgornjo kodo se ne zgodi nič, saj smo funkcijo samo `definirali`, nikoli pa je nismo `poklicali`. Funkcijo pokličemo z njenim imenom in navadnimi oklepaji:

```js
hello(); // Hello world
hello(); // Hello world
hello(); // Hello world
hello(); // Hello world
hello(); // Hello world
```

V konzolo smo dobili 5x izpis `Hello world`.

Funkcije lahko sprejmejo `argumente`, ki jih lahko nato v funkciji uporabimo. Argumente pri definiciji funkcije zapišemo v navadne oklepaje, ločene z vejico.

```js
function pozdravi(ime) {
    console.log(`Pozdravljen ${ime}`);
}
```

> `` `Pozdravljen ${ime}` `` naredi isto kot `"Pozdravljen " + ime`.

Sedaj moramo pri klicu funkcije podati argumente. Če jih ne podamo so `undefined`.

```js
pozdravi(); // Pozdravljen undefined
pozdravi("Matej"); // Pozdravljen Matej
pozdravi("Jan"); // Pozdravljen Jan
pozdravi("Svet"); // Pozdravljen Svet
```

Primer funkcije z več argumenti:

```js
function predstavi(ime, starost) {
    console.log(`Jaz sem ${ime}. Star sem ${starost} let.`);
}

predstavi("Matej", 22); // Jaz sem Matej. Star sem 22 let.
predstavi("Svet", 4500000000); // Jaz sem Svet. Star sem 4500000000 let.
```

> Pazi! Javascript ne ločuje med različnimi tipi argumentov, tako da moramo biti sami previdni kakšne argumente podajamo funkcijam. Pri večjih Javascript projektih se zato uporablja [Typescript](https://www.typescriptlang.org/), ki olajša delo in zmanjša število napak.

Funkcije pa lahko z rezervirano besedo `return` vrednosti tudi `vrnejo`.

```js
function pomnozi(a, b) {
    return a * b;
}

// PAZI: a in b tukaj NIMATA nobene povezave z a-jem in b-jem v zgornji funkciji!!!!
// lahko bi ju poimenovali tudi naprimer e in d...
let a = 9;
let b = 3;

// ... in nato v funkcijo podali e in d: pomnozi(e, d);
let c = pomnozi(a, b); // c je sedaj 27

console.log(pomnozi(a, c)); // 243
```

# Dodatno

Nič nam ne preprečuje, da v telesu funkcije kličemo isto funkcijo. Temu rečemo `rekurzija` in je zelo uporabna za reševanje številnih problemov. Pokažimo dva enostavna primera rekurzije: računanje fakultete in Fibonaccijevih števil.

Fakulteta naravnega števila `n` je produkt pozitivnih celih števil manjših ali enakih `n`: `fakulteta(n) = n * n-1 * n-2 * ... * 2 * 1`, kar lahko rekurzivno zapišemo kot `fakulteta(n) = n * fakulteta(n - 1)`.

```js
function fakulteta(n) {
    return n * fakulteta(n - 1);
}

console.log(fakulteta(5)); // OJOJ, program crashne!!! zakaj?
```

V zgornjem programu prvotno pokličemo funkcijo z argumentom `5`, nato z `5 - 1 = 4`, `4 - 1 = 3`, `3 - 1 = 2`, `3 - 1 = 2`, `2 - 1 = 1`, `1 - 1 = 0`, `0 - 1 = -1`... temu ni konca. Potrebujemo `ustavitveni pogoj`.

```js
function fakulteta(n) {
    // dodamo ustavitveni pogoj
    if (n === 1) {
        return 1;
    }

    return n * fakulteta(n - 1);
}

console.log(fakulteta(5)); // 120 = 5 * 4 * 3 * 2 * 1
```

Izračunajmo še Fibonaccijeva števila. Za Fibonaccijeva števila velja, da je vsako naslednje število seštevek prejšnjih dveh. Če začnemo z `1` in `1` se zaporedje nadaljuje: `2`, `3`, `5`, `8`, `13`, `21`, `34`,... Problem lepo rešimo rekurzivno:

```js
function fib(n) {
    // za prvo in drugo število velja, da sta 1
    if (n < 2) {
        return 1;
    }

    // seštejemo prejšnje in predprejšnje število
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 8
console.log(fib(10)); // 89
```

### Naloge

-   Napišite funkcijo `obsegKroga`, ki kot argument prejme polmer kroga. Funkcija naj izračuna obseg kroga, obseg nato izpiše na konzolo in to vrednost tudi vrne (pomagajte si s konstanto `Math.PI`).

{% resitev  %}

```js
function obsegKroga(polmer) {
    // funkcija kot parameter sprejme polmer kroga
    let obseg = 2 * Math.PI * polmer; // izračunamo obseg in ga shranimo v spremenljivko
    console.log(`Obseg kroga s polmerom ${polmer} je ${obseg}`); // izpišemo
    return obseg; // vrednost obsega za konec vrnemo
}
```

{% /resitev %}

-   Podobno kot zgoraj napišite še funkcije `povrsinaKroga`, `obsegKvadrata` ter `povrsinaKvadrata`.

{% resitev  %}

```js
function povrsinaKroga(polmer) {
    let povrsina = Math.PI * polmer * polmer;
    console.log(`Povrsina kroga s polmerom ${polmer} je ${povrsina}`);
    return povrsina;
}

function obsegKvadrata(stranica) {
    let obseg = 4 * stranica;
    console.log(`Obseg kvadrata s stranico ${stranica} je ${obseg}`);
    return obseg;
}

function povrsinaKvadrata(stranica) {
    let povrsina = stranica * stranica;
    console.log(`Povrsina kvadrata s stranico ${stranica} je ${povrsina}`);
    return povrsina;
}
```

{% /resitev %}

-   Zgornje funkcije uporabite v funkciji `izracunajVse`. Funkcija prejme število, ki ga nato uporabi za izpis obsega in ploščine kroga in pravokotnika. Ne ponavljajte kode, uporabite že prej definirane funkcije.

{% resitev %}

```js
function izracunajVse(a) {
    let obsegKr = obsegKroga(a);
    let povrKr = povrsinaKroga(a);
    let obsegKv = obsegKvadrata(a);
    let povrKv = povrsinaKvadrata(a);

    console.log(`\nVrnjene vrednosti za ${a}:`);
    console.log("Obseg kroga: " + obsegKr);
    console.log("Povrsina kroga: " + povrKr);
    console.log("Obseg kvadrata: " + obsegKv);
    console.log("Povrsina kvadrata: " + povrKv);
}
```

Če sedaj pokličemo funkcijo `izracunajVse` s parametrom `3` dobimo na konzolo izpis:

```
Obseg kroga s polmerom 3 je 18.84955592153876
Povrsina kroga s polmerom 3 je 28.274333882308138
Obseg kvadrata s stranico 3 je 12
Povrsina kvadrata s stranico 3 je 9

Vrnjene vrednosti za 3:
Obseg kroga: 18.84955592153876
Povrsina kroga: 28.274333882308138
Obseg kvadrata: 12
Povrsina kvadrata: 9
```

{% /resitev %}

-   Isto naredite za pravokotnik (sepravi potrebujete 2 argumenta).

{% resitev %}

```js
function obsegPravokotnika(a, b) {
    let obseg = 2 * a + 2 * b;
    console.log(`Obseg pravoktonika s stranicama ${a} in ${b} je ${obseg}`);
    return obseg;
}

function ploscinaPravokotnika(a, b) {
    let ploscina = a * b;
    console.log(
        `Ploscina pravoktonika s stranicama ${a} in ${b} je ${ploscina}`
    );
    return ploscina;
}
```

{% /resitev %}

-   Čez nekaj tednov se bomo srečali z nalogo `FizzBuzz`. Naredimo funkcijo, ki nam bo pri nalogi pomagala. Funkcija naj prejme število ter nato izpiše:

    -   `Fizz`, če je število deljivo s 3,
    -   `Buzz`, če je število deljivo s 5,
    -   `FizzBuzz`, če je število deljivo s 3 in s 5,
    -   število samo, če ne ustreza zgornjim pogojem.

{% resitev %}

```js
function fizzBuzz(st) {
    if (st % 3 === 0 && st % 5 === 0) {
        console.log("FizzBuzz");
    } else if (st % 3 === 0) {
        console.log("Fizz");
    } else if (st % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(st);
    }
}
```

{% /resitev %}

-   Napišite funkcije za operacije `seštevanja`, `množenja` in `potenciranja`, ki vrnejo ustrezno vrednost.

    -   Primer: `function sestej(a,b)`, ki vrne sestevek a in b.
    -   Inicializiraj spremenljivki **x** in **y** z poljubnimi številskimi vrednostmi. (recimo 10 in 2)
    -   Spremenljivki x in y ustavite kot parametre prej napisanih funkcij in izpišite kaj vrnejo.
    -   v eni vrstici izračunajte in izpišite rezultat izraza `(x**y)*x+y`. Uporabite prej uporabljene funkcije.

{% resitev %}

```js
function sestej(a, b) {
    return a + b;
}

function zmnozi(a, b) {
    return a * b;
}

function potenciraj(a, b) {
    return a ** b;
}

let x = 10;
let y = 2;

console.log(sestej(x, y)); // 12
console.log(zmnozi(x, y)); // 20
console.log(potenciraj(x, y)); // 100

console.log(sestej(zmnozi(potenciraj(x, y), x), y)); // 1002
```

{% /resitev %}

-   Napišite funkcijo ki izračuna potencialno energijo telesa, z podano maso in višino kot argument funkcije.
    -   Formula za izračun je `let potenc = m * g * h`
    -   `g` definirajte zunaj funkcije kot konstanto (9.81)
    -   funkcija naj ima obliko `function potencialna(m, h)` in naj vrne številsko vrednost.
    -   gravitacijski pospešek naj dobi iz globalne spremenljivke `g`

{% resitev %}

```js
const g = 9.81;

function potencialna(m, h) {
    return m * h * g;
}

console.log(potencialna(10, 10)); // 981
```

{% /resitev %}

#### Pa še malo težje (rekurzija)

-   Napišite rekurzivno funkcijo ki izračuna vsoto vseh naravnih števil manjših od `n` (podobno kot izračun fakultete).

{% resitev %}

```js
// seveda se to hitreje izračuna z znano formulo n*(n+1)/2
function sestevek(n) {
    if (n === 1) {
        return 1;
    }

    return n + sestevek(n - 1); // identicno kot fakulteta, samo da imamo tukaj +
}
```

{% /resitev %}

-   Napišite rekurzivno funkcijo za izpis prvih `n` naravnih števil.

{% resitev %}

```js
function izpisStevil(n) {
    if (n === 0) return;
    izpisStevil(n - 1);
    console.log(n);
}

// če v zgornji funkciji samo zamenjamo izpis in rekurziven klic, dobimo izpis števil od n do 0
function kontraIzpisStevil(n) {
    if (n === 0) return;
    console.log(n);
    izpisStevil(n - 1);
}
```

{% /resitev %}

-   Napišite rekurzivno funkcijo za izračun eksponenta: `eksponent(2, 5) = 2**5 = 32`.

{% resitev %}

Za izračun potence najprej definirajmo rekurzivno enačbo: `x^n = x * x^(n-1)`. Velja tudi `st^1 = st`. Sedaj lahko to spremenimo v kodo:

```js
function potenca(st, eksp) {
    if (eksp === 1) return st;

    return st * potenca(st, eksp - 1);
}
```

{% /resitev %}
