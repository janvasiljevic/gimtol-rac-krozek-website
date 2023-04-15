---
external: false
title: Operacije nad spremenljivkami 
description: Operacije nad spremenljivkami
date: 2023-01-28
draft: false
---


Nad spremenljivkami lahko izvajamo različne operacije. Začnimo s spremenljivkami tipa število. Kot lahko predvidevamo, jih lahko seštevamo, odštevamo, množimo, delimo, potenciramo in dobimo ostanek deljenja (s t.i. operatorjem *modulo*). Operacije so vedno v obliki: `<spremenljivka ali vrednost> <operator> <spremenljivka ali vrednost>`. Poglejmo si par primerov:

```js
let a = 10;
let b = 3;

// Seštevanje:
console.log(a + b); // 13

// Odštevanje
console.log(a - b); // 8

// Deljenje
console.log(a / b); // 3.333333333335

// Množenje
console.log(a * b); // 30

// Eksponenti
console.log(a ** b); // 1000

// Ostanek deljenja 
console.log(a % b) // 1
```

S operacijami lahko neposredno priredimo vrednost spremenljivke ali spremenimo vrednost že obstoječe spremenljivke:

```js
let a = 3.2;
let b = 8.4;

// Spremenljivki 'c' priredimo vrednost seštevanja  
let c = a + b;

console.log(c); // 11.60000000000001 
```

> Zakaj je 3.2 + 8.4 = 11.60000000000001 in ne 11.6? Računalniki ne razumejo desetiškega sistema le dvojiški (0110 1010). Vse podatke si tudi shranjuje v dvojiškem sistemu. Zato pri operacijah nad določenimi decimalnimi števili lahko pride do napake, ki se poznajo v čudnih napakah kot so zelo majhna odstopanja. Dodatna razlaga: [Floating Point Math](https://0.30000000000000004.com/)


Čeprav zgornje priredbe spominjajo na matematične enačbe to niso, vendar gre zmeraj za priredbo vrednosti. Zato lahko delamo stvari kot so:

```js
let d = 5;

d = d + 5;

console.log(d); // 10

d = d - 3;

console.log(d); // 7

d = d * d;

console.log(d); // 49
```

Ker so zgornje operacije zelo pogoste poznamo krajši zapis:

```js
let e = 5;

e += 10; // 'e' je 15
e -= 24; // 'e' je -9 
e *= -2; // 'e' je 18
e /= 2;  // 'e' je 9
e %= 2;  // 'e' je 1 
```

V prihodnosti bomo spoznali da je operacija prištevanja in odštevanja števila `1` zelo pogosta. Poznamo še hitrejši zapis. 

```js

let f = 10;

// Namesto f += 1 lahko pišemo:
f++; // Vrednost 'f'-ja je sedaj 11

// In seveda za odštevanje:
f--; // Vrednost je ponovno 10
```

Do sedaj smo spoznavali le operacija nad števili, a to ni edini podatkovni tip ki omogoča operacije. Npr. nize lahko seštevamo:

```js

let ime = "Janez";
let priimek = "Trdina";

let polnoIme = ime + " " + priimek;

console.log(polnoIme); // Janez Trdina
```

In seveda tudi operacije nad logičnimi vrednostmi. Poznamo 3 operacije nad logičnimi vrednostmi:
- **Negacija** s operatorjem `!`
- **Ali** s operatorjem `||` (na tipkovnici {% kbd %}  {% kbd %} Alt Gr {% /kbd %} + {% kbd %} w {% /kbd %}{% /kbd %})
- **In** s operatorjem `&&`

Tako kot v matematiki ima "negacija" prednost pred "in", ki ima prednost pred "ali". 

```js

let resnica = true;
let laz = false;

console.log(resnica && laz); // false
console.log(resnica || laz); // true
console.log(!resnica); // false
console.log(resnica && (resnica || laz)); // true

let b = true;

console.log(b || !b); // To be or not to be is true
```


Osvežitev teh treh operacij:
| Vrednost `a`  | `!a`    |
| --------- | -------- |
| `true` | `false` |
| `false` | `true` |

| Vrednost `a`   | Vrednost `b`     | `a && b`|
| --------- | -------- | - |
| `false` | `false` | `false` |
| `false` | `true` | `false` |
| `true` | `false` | `false` |
| `true` | `true` | `true` |

| Vrednost `a`   | Vrednost `b`     | `a \|\| b`|
| --------- | -------- | - |
| `false` | `false` | `false` |
| `false` | `true` | `true` |
| `true` | `false` | `true` |
| `true` | `true` | `true` |

Vse podatkovne tipe lahko primerjamo med seboj. Iz primerjave dobimo logično vrednost.

```js
let a = 10;
let b = 27;

console.log(a < b); // true
console.log(a > b); // false
console.log(a === 10); // true
console.log(a === 27); // false

console.log(3 <= 4); // true
console.log(4 <= 4); // true
console.log(3 >= 4); // false
```

Poglejmo še par primerov za nize:

```js
console.log("matej" === "jan"); // false
console.log("matej" === "matej"); // true
console.log("a" > "b"); // false
console.log("matej" > "jan"); // true
console.log("abd" > "abc"); // true
```

Kot vidimo Javascript nize primerja po abecedi. Prvo primerja prvo črko, nato drugo in tako do konca besede.

> Pazite, da med seboj primerjate le spremenljivke istega tipa, saj v nasprotnem primeru lahko pride do zelo čudnega obnašanja.

Na spletu boste videli tudi uporabo `==` namesto `===`, vendar vam uporabo `==` odsvetujemo, ker omogoča primerjanje med različnimi podatkovnimi tipi.

```js
console.log(8 === "8"); // false
console.log(8 == "8"); // true
```

### Naloge 

- Definirajte spremenljivko `ime` in ji dodelite vaše ime
- Definirajte spremenljivko `starost` in ji dodelite starost 
- Izpišite stavek v obliki `Jan je star 23 let`
- Izračunajte koliko boste stari čez 3 leta
- Preverite ali boste takrat polnoletni
- Izpišite `false` če je vaša starost liha in `true` če je soda
- Izpišite `true` le je prestopno leto in `false` če ni. Za začetek upoštevajte samo 4 letno pravilo.
  - Nato dodajte 100 letno pravilo (Vsakih 100 let ni prestopno leto)
  - Končajte s 400 letnim pravilom (Vsakih 400 let je prestopno leto, navkljub prejšnjemu pravilu)
- Izračunajte obseg in površino kroga s poljubnim premerom. Namig: uporabite konstanto `Math.PI` za pi.
