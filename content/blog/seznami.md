---
external: false
title: Seznami
description: Shranjevanje podatkov v seznamih in delo z njimi
date: 2023-02-23
draft: false
---

Seznami so posebne spremenljivke, ki lahko hranijo več vrednosti. Predstavljeni so z oglatimi oklepaji `[]` in vrednosti so ločene z vejico `,`. Vrednosti v seznamih so lahko različnih tipov, vendar je priporočljivo, da so vse vrednosti enakega tipa.

```js
let seznamBarv = ["rdeča", "zelena", "modra"];

let seznamStevilDoPet = [1, 2, 3, 4, 5];

let prazenSeznam = [];

let mesanSeznam = ["rdeča", 1, true, []]; 
```

Pri definiciji seznama ni potrebno vse vrednosti navesti v eni vrstici. Če je seznam dolg, ga je bolje razdeliti na več vrstic. `seznamBarv` bi lahko napisali tudi na naslednji način:

```js
let seznamBarv = [
  "rdeča",
  "zelena",
  "modra"
];
```

> V tuji literaturi se seznam imenuje tudi **array**. Vrednosti v seznamu se imenujejo **elementi**.

## Dostopanje do elementov

Elemente v seznamu lahko dostopamo z uporabo oklepajev `[]` in indeksa elementa. Indeks elementa je številka, ki predstavlja mesto elementa v seznamu. Indeks elementa se začne z **0**, kar pomeni, da je prvi element v seznamu na mestu `0`, drugi element pa na mestu `1`, tretji element pa na mestu `2` itd. Še enkrat: Programerji začnemo šteti z 0, ne z 1.

```js
let drzave = ["Slovenija", "Avstrija", "Madžarska", "Italija", "Francija"];

console.log(drzave[0]); // Izpiše "Slovenija"
console.log(drzave[1]); // Izpiše "Avstrija"
console.log(drzave[2]); // Izpiše "Madžarska"
console.log(drzave[3]); // Izpiše "Italija"
console.log(drzave[4]); // Izpiše "Francija"
```

Če poskušamo dostopati do elementa, ki ni v seznamu, dobimo `undefined`:

```js
console.log(drzave[5]); // Izpiše undefined
```

## Spreminjanje elementov

Elemente v seznamu lahko spremenimo tako, da jih prepišemo z novimi vrednostmi.

```js

let solata = ["zelje", "korenje", "paradižnik", "kumara"];

console.log(solata); // Izpiše ["zelje", "korenje", "paradižnik", "kumara"]

solata[0] = "zelena solata";

console.log(solata); // Izpiše ["zelena solata", "korenje", "paradižnik", "kumara"]

solata[1] = "korenček";

console.log(solata); // Izpiše ["zelena solata", "korenček", "paradižnik", "kumara"]
```

## Dolžina seznama

Seznam je v resnici objekt, tako kot `console`. Objekt ima lastnosti, ki jih lahko dostopamo z uporabo pike `.`. Ena od lastnosti seznama je `length`, ki nam pove, koliko elementov ima seznam.

```js
let solata = ["zelje", "korenje", "paradižnik", "kumara"];

console.log(solata.length); // Izpiše 4
```

S uporabo dolžine seznama lahko dostopamo do zadnjega elementa seznama:

```js
console.log(solata[solata.length - 1]); // Izpiše "kumara"
```

Če želimo pa izpisati vse elemente seznama, lahko uporabimo zanko `for`:

```js
for (let i = 0; i < solata.length; i++) {
  console.log(`Element s indeksom ${i} je ${solata[i]}`);
}
```

## Dodajanje elementov

Sezname lahko poljubno podalšujemo, tako da dodajamo nove element na začatek ali konec seznama. To dosežemo s uporabo metod `push` in `unshift`. Metoda `push` doda element na konec seznama, metoda `unshift` pa na začetek seznama.

```js
let sadnaKupa = ["jabolko", "hruška", "kivži"];

console.log(sadnaKupa.length); // Izpiše 3

sadnaKupa.push("banana");

console.log(sadnaKupa); // Izpiše ["jabolko", "hruška", "kivi", "banana"]
console.log(sadnaKupa.length); // Izpiše 4

sadnaKupa.unshift("ananas");

console.log(sadnaKupa); // Izpiše ["ananas", "jabolko", "hruška", "kivi", "banana"]
console.log(sadnaKupa.length); // Izpiše 5
```

## Odstranjevanje elementov

Elemente lahko odstranimo iz seznama s pomočjo metod `pop` in `shift`. Metoda `pop` odstrani zadnji element seznama, metoda `shift` pa prvi element seznama.

```js
let meseci = ["januar", "februar", "marec", "april", "maj", "junij"];

console.log(meseci); // Izpiše ["januar", "februar", "marec", "april", "maj", "junij"]

meseci.pop();

console.log(meseci); // Izpiše ["januar", "februar", "marec", "april", "maj"]

meseci.shift();

console.log(meseci); // Izpiše ["februar", "marec", "april", "maj"]
```

## Preostale metode za delo s seznami

Seznami imajo še veliko drugih metod, ki jih lahko uporabimo za delo z njimi. V tabeli so navedene metode, ki vam bodo velikokrat prišle prav. Obstaja jih še več in jih lahko najdete na [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Naj vas ne skrbi, da je seznam metod tako dolg, saj jih boste v večini primerov uporabljali le nekaj. 

| Metoda                                                                                                          | Opis                                                         |
|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)       | združi en ali več seznamov in vrne rezultat                  |
| [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)     | poišče element v seznamu in vrne pozicijo                    |
| [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)           | vrne vrednost prvega elementa v seznamu, ki zadovolji pogoju |
| [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) | vrne indeks prvega elementa v seznamu, ki zadovolji pogoju   |
| [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)     | pokliče funkcijo za vsak element v seznamu                   |
| [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)   | preveri ali seznam vsebuje vrednost                          |
| [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)           | sortira elemente v seznamu po abecednem vrstnem redu         |
| [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)         | vrne pod seznam seznama v določenem intervalu                |
| [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)       | odstrani elemente in doda nove                               |

## Posebnosti pri delu z seznami

Seznami so na videz tipična spremenljivka, vendar pa imajo nekaj posebnosti, ki jih je potrebno upoštevati. 

```js
let seznamEna = ["jabolko", "hruška", "kivi"];
let seznamDva = seznamEna;

seznamDva.push("banana");

console.log(seznamEna); // Izpiše ["jabolko", "hruška", "kivi", "banana"]
```

V zgornjem primeru smo seznam `seznamEna` dodelili spremenljivki `seznamDva`. Vendar pa seznam `seznamEna` nismo kopirali, temveč smo mu samo dodelili novo ime. To pomeni, da imata seznam `seznamEna` in seznam `seznamDva` isti naslov v pomnilniku. Če spremenimo seznam `seznamDva`, se bo spremenil tudi seznam `seznamEna`.

> Če poenostavimo sezname v JavaScript-u, lahko rečemo, da gre za zaporedje elementov, ki se nahajajo na določenem naslovu v pomnilniku. Seznam v resnici kaže le na naslov v pomnilniku, kjer se nahajajo elementi. Če seznamu dodelimo novo ime, se ne kopira seznam, temveč se samo dodeli novo ime seznamu, ki že obstaja.

Na to lastnost moramo biti pozorni, saj lahko s tem povzročimo napake. Če želimo kopirati seznam, moramo uporabiti metodo `slice` ali metodo `concat`.

```js
let seznamEna = ["jabolko", "hruška", "kivi"];

let seznamDva = seznamEna.slice();

seznamDva.push("banana");

console.log(seznamEna); // Izpiše ["jabolko", "hruška", "kivi"]
console.log(seznamDva); // Izpiše ["jabolko", "hruška", "kivi", "banana"]
```

Paziti dodatno moramo na to, da ta lastnost velja tudi ob podajanju seznamov kot argumentov funkcij.

```js
function dodajBanano(seznam) {
  seznam.push("banana");
}

let seznamEna = ["jabolko", "hruška", "kivi"];

dodajBanano(seznamEna);

console.log(seznamEna); // Izpiše ["jabolko", "hruška", "kivi", "banana"]
```

V tem primeru smo seznam `seznamEna` podali kot argument funkciji `dodajBanano`. Ker seznam le kaže na prostor v pomnilniku, se bo seznam `seznamEna` spremenil tudi v funkciji `dodajBanano`.

> Spremenljivke tipov število, niz in logična vrednost se zmeraj kopirajo, ko jih podamo kot argument funkciji. Temu rečemo **pass by value**. Seznami pa se zmeraj podajo kot argument funkciji kot **pass by reference**.

## Večdimenzionalni seznami

Seznami lahko vsebujejo tudi druge sezname. To so seznami, ki imajo več kot eno dimenzijo. V tem primeru se imenujejo **večdimenzionalni seznami**. 

```js
let seznamEna = ["jabolko", "hruška", "kivi"];
let seznamDva = ["banana", "ananas", "mango"];
let seznamTri = ["pomaranča", "limona", "sliva"];

let seznamCetrti = [seznamEna, seznamDva, seznamTri];

console.log(seznamCetrti); // Izpiše [["jabolko", "hruška", "kivi"], ["banana", "ananas", "mango"], ["pomaranča", "limona", "sliva"]]

let jabolko = seznamCetrti[0][0];
let pomaranca = seznamCetrti[2][0];
let ananas = seznamCetrti[1][1];

console.log(jabolko, pomaranca, ananas); // Izpiše "jabolko pomaranča ananas"
```

## Naloge

> Poskusite čim večkrat shraniti svoje delo s sistemom `git` in nato narediti `push` na GitHub. Npr. po vsaki nalogi (3 zlata vredni ukazi so `git add .`, `git commit -m "Naredil 1. in 2. nalogo"`, `git push`).

- Napiši funckijo `vsotaSeznama(seznam)`, ki vrne vsoto vseh števil v seznamu. Npr. `vsotaSeznama([1, 2, 3])` vrne `6`.
- Napiši funckijo `prestejZvezdice(seznam)`, ki vrne število vseh zvezdic v seznamu. Npr. `prestejZvezdice(["*", "*", "*", "x", "*", "*"])` vrne `4`.
- Napiši funckijo `poisciMax(seznam)`, ki vrne največjo vrednost v seznamu. Npr. `poisciMax([1, 2, 3])` vrne `3`.
- Napiši fukcijo `povprecjeSeznama(seznam)`, ki vrne povprečje vseh števil v seznamu. Npr. `povprecjeSeznama([1, 2, 3])` vrne `2`.
- Napiši funkcijo `sestaviSeznam(seznam1, seznam2)`, ki vrne seznam, ki je sestavljen iz elementov seznama `seznam1` in `seznam2`. Npr. `sestaviSeznam([1, 2, 3], [4, 5, 6])` vrne `[1, 2, 3, 4, 5, 6]`. **Ne** uporabljajte metode `concat`.
- Napiši funkcijo `aliStaSeznamaEnaka(seznam1, seznam2)`, ki vrne `true`, če sta seznam1 in seznam2 enaka. Npr. `aliStaSeznamaEnaka([1, 2, 3], [1, 2, 3])` vrne `true`. Če sta seznam1 in seznam2 različna, vrne `false`. Npr. `aliStaSeznamaEnaka([1, 2, 3], [1, 2, 4])` vrne `false` ali `aliStaSeznamaEnaka([1, 2, 3], [1, 2, "3"])` vrne `false`.
- Napiši funckijo `aliJeSeznamUrejen(seznam)`, ki vrne `true`, če je seznam urejen naraščajoče. Npr. `aliJeSeznamUrejen([1, 2, 3])` vrne `true`. Če seznam ni urejen naraščajoče, vrne `false`. Npr. `aliJeSeznamUrejen([1, 3, 2])` vrne `false`.
- Napiši funkcijo `aliImaSeznamDvojnike(seznam)`, ki vrne `true`, če ima seznam dvojnike. Npr. `aliImaSeznamDvojnike([1, 2, 3, 3])` vrne `true`. Če seznam nima dvojnikov, vrne `false`. Npr. `aliImaSeznamDvojnike([1, 2, 3])` vrne `false`.

### Sklop 2

- Napiši funkcijo `obrniSeznam(seznam)`, ki vrne obrnjen seznam. Npr. `obrniSeznam([1, 2, 3])` vrne `[3, 2, 1]`.
- Napiši funkcijo `unikatniSeznam(seznam)`, ki vrne seznam, ki vsebuje samo unikatne elemente. Npr. `unikatniSeznam([1, 2, 3, 3])` vrne `[1, 2, 3]`. Pokusi ohraniti vrstni red elementov.
- Napiši funkcijo `razlikaSeznama(seznam1, seznam2)`, ki vrne seznam, ki vsebuje elemente, ki se nahajajo le v enem od seznamov. Npr. `razlikaSeznama([1, 2, 3], [2, 3, 4])` vrne `[1, 4]`.
- Napiši funkcijo `rotirajVLevo(seznam)`, ki vrne seznam, ki je enak seznamu, le da so vsi elementi premaknjeni za eno mesto v levo. Npr. `rotirajVLevo([1, 2, 3, 4, 5])` vrne `[2, 3, 4, 5, 1]`.
  - **Dodatno**, spremeni funkcijo tako, da funkcija  `rotirajVLevo(seznam, n)` vrne seznam, ki je enak seznamu, le da so vsi elementi premaknjeni za `n` mest v levo. Npr. `rotirajVLevo([1, 2, 3, 4, 5], 2)` vrne `[3, 4, 5, 1, 2]`.
- Napiši funkcijo `sahovnica(h, w)`, ki vrne seznam, ki predstavlja sahovnico. Vrstice sahovnice so predstavljene znotraj seznama. Npr. `sahovnica(3, 3)` vrne `[['*', 'x', '*'], ['x', '*', 'x'], ['*', 'x', '*']]`. Vrstni red črnih `x` in belih `*` se lahko začne poljubno, potrebno pa je ustvariti pravilen vzorec. Primer:

```js
[
  ['*', 'x', '*'],
  ['x', '*', 'x'],
  ['*', 'x', '*']
]
```

## Naprednejše naloge

Te naloge so zahtevnejše. 

### Izprazni seznam

Napiši funkcijo `izprazniSeznam(seznam)`, ki izprazni seznam. Npr.

'''js
let seznam = [1, 2, 3];
izprazniSeznam(seznam);
console.log(seznam); // Izpiše []
'''

**Pazi**, da ne narediš novega seznama, ampak da izprazniš obstoječega.

### Seštevanje matrik

Matrika je v matematiki tabela števil, ki so shranjena v vrsticah in stolpcih. Vsak element v matriki je število. Za reševanje te naloge potrebuješ večdimenzionalne sezname.

Napiši funkcijo `sestejMatriki(matrika1, matrika2)`, ki vrne novo matriko.
Kot vhod dobimo dve matriki, ki sta shranjeni v seznamih. Vsak element v seznamu je seznam, ki predstavlja vrstico v matriki. Vsak element v vrstici je število, ki predstavlja element v matriki.
Seštevek matrik dobimo, če seštejemo istoležne elemente.

```js
let matrika1 = [
  [1, 2, 3],
  [3, 2 ,1],
  [5, 3, 1]
];

let matrika2 = [
  [7, 5, 4],
  [6, 5, 4],
  [3, 2, 1]
];

console.log(sestejMatriki(matrika1, matrika2));
// [
//  [8, 7, 7],
//  [9, 7, 5],
//  [8, 5, 2],
// ]
```

### Medzvezdice

V 2D seznamu se nahajata dve zvezdici (Označeni z `*`) ostala polja pa so prazna (Označena z ` `). Napiši funkcijo `medZvezdicama(seznam)`, ki izpiše razdaljo med zvezdicama. Razdalja je število polj, ki jih je potrebno prehoditi, da prideš od ene zvezdice do druge, brez da bi se premaknila po diagonalah.

```js
let seznam = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "*", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

console.log(medZvezdicama(seznam)); // Izpiše 5, ker je potrebno prehoditi 5 praznih polj, da prideš od ene zvezdice do druge
```

### Stolpnice 

V 2D seznamu se nahajajo stolpnice označene z `#`. Napiši funkcijo, `stolpnice(seznam)`, ki izpiše višino najvišje stolpnice.  
Stolpnice stojijo vsaka v svojem stolpcu. Višina stolpnice je število `#` v stolpcu.  
Stolpnice v primeru imajo višine 3, 2, 8, 2, 2, 3, 1, 1, 2, 1.

```js
let stolpnice = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "#", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "#", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "#", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "#", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "#", " ", " ", " ", " ", " ", " ", " "],
  ["#", " ", "#", " ", " ", "#", " ", " ", " ", " "],
  ["#", "#", "#", "#", "#", "#", " ", " ", "#", " "],
  ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]
];

console.log(stolpnice(stolpnice)); // Izpiše 8, ker je najvišja stolpnica 8 polj visoka
```

### Zaklepajski izrazi

Zaklepajski izrazi so skupki odprtih in zaprtih oklepajev. Nekaj primerov je naštetih spodaj:  

- `"()"`
- `"()()(())"`
- `"((((()))))"`

naslednji zaklepajski izrazi **NISO** veljavni, ...

- `"("`
- `"(()"`
- `")("`
- `"(())))"`

Napišite funkcijo `veljavenIzraz(izraz)`, ki preveri, ali je izraz veljaven. Funkcija vrne `true`, če je izraz veljaven, sicer pa vrne `false`.

Pomagajte si z funkcijo `split`, ki razdeli niz na podnize glede na podani znak. `vhod.split("")` vrne seznam znakov v nizu `vhod`.  
Npr. `"(())".split("")` vrne `["(", "(", ")", ")"]`.

```js
let vhod = "((()))";
console.log(veljavenIzraz(vhod)); // Izpiše true

vhod = ")()(";
console.log(veljavenIzraz(vhod)); // Izpiše false
```

### Najdaljši podseznam

V podanem seznamu števil, poišči najdaljši podseznam, ki je urejen naraščajoče.

```js
let vhod = [8, 7, 6, 1, 2, 3];
console.log(najdaljsiPodseznam(vhod)); // Izpiše [1, 2, 3]

let vhod2 = [8, 6, 7, 1, 2, 5, 7]; 
console.log(najdaljsiPodseznam(vhod2)); // Izpiše [1, 2, 5, 7]
```

### Najdaljša ladja

Najdi največjo ladjo na 10x10 mreži. Ladja je označena kot 1, voda pa kot 0.
V vodi je lahko več ladjic, vendar ne smejo se dotikati.
Vse so debele 1 polje, vendar imajo lahko različne dolžine.

```js
let mreza = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];

console.log(najdaljsaLadja(mreza)); // Izpiše 6, ker je najdaljša ladja dolga 6 polj
```
