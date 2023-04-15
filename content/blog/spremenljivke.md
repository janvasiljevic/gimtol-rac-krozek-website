---
external: false
title: Spremenljivke in tipi
description: Kako JS shranjuje podatke in kakšnih tipov so.
date: 2023-01-27
draft: false
---

## Izpis s console.log

Vsakič ko program poženemo, ta izpiše podatke **samo**, če mu to izrecno povemo. V nasprotnem primeru program tiho izvede kodo ter se izklopi, brez izpisa.  

Če pogledamo kodo programa "HelloWorld", opazimo da kličemo funkcijo `console.log`.  

```js
console.log("Hello world");
```

To bo naš način za izpisovanje iz programa. V oklepaje funkcije napišemo **kaj** želimo izpisati, `console.log` pa poskrbi za izpis tega v konzolo.  

**Primer:**  

```js
console.log("zdravo");
console.log(1);
console.log(true);
console.log("adijo");
```

![console log izpisi](/assets/img/consolelogs.png)


## Spremenljivke

Spremenljivke so eden izmed osnovnih konceptov programskih jezikov. V Javascript-u definiramo spremenljivke s ključno besedo `let`. Na drugih gradivih boste videli tudi `var` in `const`, vendar se bomo trenutno osredotočili na `let`.

Pri večini programiranja skoraj vedno obdelujemo podatke. Spremenljivka je način hranjenja informacij v programu. Spremenljivke si lahko predstavljate kot škatlo in ime spremenljivke kot oznako na škatli.

> Imamo škatlo lego kock. Na njej je napis "Legice". V tem primeru je t.i. vrednost spremenljivke lego kocke in ime spremenljivke "Legice". Kot lahko spreminjamo vsebino škatel lahko spreminjamo vrednost spremenljivk.

Do sedaj smo izpisali `Hello world` s tem koščkom kode:
```js
console.log("Hello world!");
```

`"Hello world"`-u rečemo **niz** ali po angleško **string**. Enak primer z uporabo spremenljivk bi lahko zapisalo tako:


```js
let pozdrav = "Hello world!";

console.log(pozdrav);
```

V konzoli se ponovno izpiše `Hello world!`. V tem primeru smo **ustvarili** spremenljivo z imenom `pozdrav` in ji **priredili** vrednost `"Hello world"` ter jo nato izpisali. Uporabili smo **rezervirano besedo** `let` in **operator** `=`.

> Pravila jezika, ki določajo kako izgleda koda, ter kako se kličejo ukazi, so **sintaksa** jezika.

Kakor smo rekli, lahko vrednost spremenljivke tudi spreminjamo:

```js
let pozdrav = "Hello world!";

console.log(pozdrav);

// Želimo pozdraviti še v slovenščini 
pozdrav = "Dober dan!";

console.log(pozdrav);
```

V tem primeru se prvo izpiše `Hello world!` in nato `Dober dan!`.

> V zgornjem primeru smo videli tudi primer komentarja: To so zapiski namenjeni samo nam (programerjem) in jih računalnik ob izvajanju ignorira. 

## Tipi spremenljivk

V prejšnjih dveh primerih smo definirali spremenljivko, ki je držala tekst oz. niz oz. string. Poznamo pa tudi druge **osnovne tipe** spremenljivk:
- številke 
- logične vrednosti 
- nedefinirana vrednost

```js
// Primer resnične logične vrednosti
let danesJeLepDan = true;

// Primer ne-resnične logične vrednosti
let neboJeModro = false;

// Primer številke
let starost = 17;

// Primer številke s plavajočo vejico 
let pi = 3.14;
```

Kako je pa lahko spremenljivka nedefinirana? 

```js
let odgovorNaVse; 

let leteciPingvini = undefined;
```

V prvem primeru smo le ustvarili spremenljivko `odgovorNaVse` vendar ji nismo priredili vrednosti. Čeprav ji nismo priredili vrednosti jo ta še zmeraj ima in sicer `undefined`. Sliši še čudno, vendar spremenljivke imajo vedno vrednost četudi ta vrednost označuje da ni vrednosti. V drugem primeru, pa smo  spremenljivki `leteciPingvini` priredili vrednost `undefined`.  

Še par primerov:
```js
// Ustvarimo spremenljivko 'a' z vrednostjo 3
let a = 3;

// Ustvarimo spremenljivko 'b' z vrednostjo spremenljivke 'a'
let b = a;

console.log(b); // Konzola izpiše 3

// Vrednost 'a'-ja spremenimo na 4
// Vrednost 'b'-ja ostane 3
a = 4; 

console.log(a, b); // Konzola izpiše '4 3'

// Ni nujno da spremenljivki takoj priredimo vrednost
// Tukaj spremenljivko 'c' samo ustvarimo
let c;

console.log(c); // Konzola izpiše 'undefined'

// Šele tukaj 'c'-ju priredimo vrednost 10  
c = 10;

console.log(c); // Konzola izpiše '10'
```