---
external: false
title: Pogojni stavki
description: Pogojni stavki, vejanje kode, if, else, else if
date: 2023-02-10
draft: false
---

> A wife asks her programmer husband to go to the store: 'Can you go down to the store, and get a gallon of milk, and if they have eggs, get 6. Later on he returns home and she looks at his purchases and says 'Why do you have 6 gallons of milk?' He responded 'They had eggs.'

Vsi programi spisani do sedaj so bili **linearni**. To pomeni, da se je koda izvajala od vrha navzdol, brezpogojno. Če želimo, da se koda izvede le v določenih pogojih, uporabimo **pogojne stavke**. Ti nam omogočajo, da se določeni del kode izvede le, če je izpolnjen določen logičen pogoj.

V JavaScript-u poznamo naslednje pogojne stavke:

- `if` - izvede kodo, če je pogoj izpolnjen
- `else` - izvede kodo, če ni izpolnjen pogoj iz `if`
- `else if` - izvede kodo, ki sledi `else if`, če je pogoj izpolnjen in ni izpolnjen pogoj iz prejšnjega `if` ali `else if`
- `switch` - specifičen pogojni stavek, ki primerja vrednost z različnimi možnostmi in izvede kodo, ki ustreza izbrani možnosti


## If pogojni stavek

Pogojni stavek `if` izvede kodo, če je izpolnjen določen pogoj. Pogoj je logična izjava, ki se izrazi z uporabo operatorjev za primerjavo in smo jih že spoznali v prejšnjih poglavjih. Struktura pogojnega stavka `if` je naslednja:

```js
if (pogoj) {
  // Koda, ki se izvede, če je pogoj izpolnjen. Taki kodi rečemo telo pogojnega stavka
}
```

> Zgornji primer je oblika stavka if, vendar se dejansko koda ne bi izvedla. Prikazuje le strukturo stavka if. Kodi, ki se ne izvede in je namenjena le za demonstracijo oz. prikaz programa se imenuje **pseudo-koda**.

Poglejmo si še par primerov:

```js
let starost = 18;

if (starost > 17) {
    console.log("Si polnoleten");
}

if (starost < 0) {
    console.log("Nisi se še rodil");
}

if (starost === 5) {
    console.log("Star si točno 5 let");
}
```

Pogojne stavke lahko vizualiziramo tudi s diagramom, na katerem prikažemo vejitve:

![](/assets/img/if-flow.png)

## Else pogojni stavek

Recimo da želimo povedati uporabniku ali je voda primerna za kopanje. V naslednjem primeru to pomeni, da je voda med 20 in 30 stopinj celzija.

```js
let temperatura = 40;

if (20 <= temperatura && temperatura <= 30) {
    console.log("Voda je super za kopanje:)");
}
```

Dodatno pa želimo tudi uporabniku eksplicitno povedati, da voda ni najbolj primerna za kopanje. Npr. ko je pod 20 stopinj ali nad 30 stopinj celzija. S uporabo samo `if` stavka bi to spisali lahko tako, da zanikamo pogoj is prvega `if`-a:

```js
let temperatura = 40;

if (20 <= temperatura && temperatura <= 30) {
    console.log("Voda je super za kopanje:)");
}

if (!(20 <= temperatura && temperatura <= 30)) {
    console.log("Ne jit v vodo:(");
}
```

Rešitev seveda deluje, vendar je precej kompleksna za branje. Tudi težja je za popravljati, saj moremo paziti, da vedno popravimo oba pogaja. Ker je izvajanje drugega odseka kode, glede na (ne)resničnost prvega pogoja eden izmed najpogostejših konceptov iz sveta programiranja, poznamo boljšo rešitev v obliki `else` pogojnega stavka.

Pogojni stavek `else` izvede kodo, če ni izpolnjen pogoj iz `if`. Struktura pogojnega stavka `else` je naslednja:

```js
if (pogoj) {
  // Koda, ki se izvede, če je pogoj izpolnjen
} else {
  // Koda, ki se izvede, če ni izpolnjen pogoj iz if
}
```

Poglejmo si še primer:

```js
let ura = 12;

if (ura <= 10) {
    console.log("Dobro jutro");
} else {
    console.log("Dober dan");
}
```

Če je ura 10:00 ali manj pozdravimo s `"Dobro jutro"`, v nasprotnem primeru pa s `"Dober dan"`.

> Else ima nujno pred sabo if blok. Med njima ne sme biti nič drugega! 

Sedaj lahko tudi primer iz uvoda prepišemo s `else`-om:

```js
let temperatura = 40;

if (20 <= temperatura && temperatura <= 30) {
    console.log("Voda je super za kopanje:)");
} else {
    console.log("Ne jit v vodo:(");
}
```

> Ko imamo if-else stavka, se bo zmeraj izvedlo NATANKO ENO izmed teles.

## Else if pogojni stavek

Pogojni stavek `else if` izvede kodo, ki sledi `else if`, če je pogoj izpolnjen in ni izpolnjen pogoj iz prejšnjega `if` ali `else if`. Struktura pogojnega stavka `else if` je naslednja:

```js
if (pogoj1) {
  // Koda, ki se izvede, če je pogoj1 izpolnjen
} else if (pogoj2) {
  // Koda, ki se izvede, če je pogoj2 izpolnjen in ni izpolnjen pogoj iz if
} else {
  // Koda, ki se izvede, če ni izpolnjen noben pogoj
}
```

> Po navadi, ko delamo s pogojnimi stavki imamo na začetku en `if` stavek nato poljubno število `else if` stavkov in na koncu še en `else` stavek. Seveda odvisno od problema, ki ga rešujemo. Tako kot pri navezi if-else, se tudi pri navezi if-if else-else zmeraj izvede NATANKO ENO izmed teles.

Dopolnimo prejšnji primer iz `else`:

```js
let ura = 14;

if (ura <= 10) {
    console.log("Dobro jutro");
} else if (ura >= 18) {
    console.log("Dober večer");
} else {
    console.log("Dober dan");
}
```

Če je ura manj ali enaka 10 pozdravimo s "Dobro jutro", če je ura večja ali enaka 18 pozdravimo s "Dober večer", v nasprotnem primeru pa s "Dober dan".

## Gnezdenje

Pogojni stavki lahko gnezdimo. To pomeni da lahko v `if` stavku imamo še en `if` stavek, in v tem `if` stavku še en `if` stavek, in tako naprej. V tem primeru se koda izvede le, če so izpolnjeni vsi pogojni stavki. Poglejmo si preprost primer, kako bi lahko primer iz `else if` napisali z gnezdenjem:

```js
let ura = 14;

if (ura <= 10) {
    console.log("Dobro jutro");
} else {
    if (ura >= 18) {
        console.log("Dober večer");
    } else {
        console.log("Dober dan");
    }
}
```

Ker pa nas naknadno zanima, ali je ura sploh pravilno vnesena (torej je med 00:00 in 24:00), lahko to preverimo z dodatnim pogojem:

```js
let ura = 14;

if (ura >= 0 && ura <= 24) {
    if (ura <= 10) {
        console.log("Dobro jutro");
    } else {
        if (ura >= 18) {
            console.log("Dober večer");
        } else {
            console.log("Dober dan");
        }
    }
} else {
    console.log("Ura ni pravilno vnesena");
}
```

## Spremenljivke v pogojnih stavkih

Znotraj telesa pogojnega stavka lahko ustvarimo nove spremenljivke. Paziti pa moramo, da te spremenljivke ne bodo več "živele" po koncu telesa. 

```js
let a = 5;

if (a > 0) {
    let b = 10;

    a += b;
    console.log(b); // 10
} // <-- Po koncu if stavka spremenljivka b ne obstaja več

console.log(a); // 15
console.log(b); // b ne obstaja več in nam brskalnik javi napako
```

![](/assets/img/error-if-b-defined.png)

## Pogojni stavki v funkcijah

Pogostokrat uporabljamo pogojne stavke v funkcijah. Poglejmo si primer, kjer imamo funkcijo `opisOcene(ocena)`, sprejme argument `ocena` tip števila. Če je ocena med 1 in 5 vrne opis ocene, če je ocena manjša od 1 ali večja od 5 pa vrne opis, da je ocena neveljavna.

```js
function opisOcene(ocena) {
    if (ocena >= 1 && ocena <= 5) {
        if (ocena == 1) {
            return "Yikes";
        } else if (ocena === 2) {
            return "Zadostno";
        } else if (ocena === 3) {
            return "Bo uredu";
        } else if (ocena === 4) {
            return "Prav dobro";
        } else if (ocena === 5) {
            return "Odlično";
        }
    } else {
        return "Ocena ni veljavna";
    }
}

console.log(opisOcene(0)); // Ocena ni veljavna
console.log(opisOcene(1)); // Yikes
console.log(opisOcene(5)); // Odlično
```

Zgornja koda sicer opravi svojo nalogo, vendar jo lahko nekoliko lepše zapišemo. Uporabimo naslednji dve značilnosti:
- `return` vrne vrednost vendar tudi prekine izvajanje funkcije. To pomeni, da po `if` stavku, ki vsebuje `return` ne potrebujemo več `else` (oz. `else if`) stavka.
- Če `if` stavek vsebuje samo eno vrstico kode, lahko odstranimo oklepaje `{}`. 

```js
function boljsiOpisOcene(ocena) {
    if (ocena <= 0 || ocena > 5) // Obrnemo stavek, tako 
        return "Ocena ni veljavna";
    
    if (ocena === 1) return "Yikes";
    if (ocena === 2) return "Zadostno";
    if (ocena === 3) return "Bo uredu";
    if (ocena === 4) return "Prav dobro";
    if (ocena === 5) return "Odlično";
}
```

> S vejitvami lahko dosežemo tudi to, da funkcija vrne različne tipe vrednost. Npr. lahko vrne število če določen pogoj velja in niz če drugi pogoj velja. Vendar je to zelo nezaželeno, saj lahko povzroči težave pri razumevanju kode. Zato je bolje, da funkcija vrne vedno enak tip vrednosti.

### Pod naloga - Prestopna leta

Pri poglavju [Operacije nad spremenljivami](operacije-nad-spremenljivkami.md) smo reševali nalogo o prestopnih letih, ki je bila razdeljena na 3 pod naloge. Poglejmo si, kako bi jo sedaj rešili s uporabo pogojnih stavkov in funkcij.

- Napiši funkcijo `prestopnoLeto(leto)`, ki preveri, ali je leto prestopno, če upoštevamo samo 4 letno pravilo. Funkcija naj vrne `true` ali `false`.

```js
function prestopnoLeto(leto) {
    if (leto % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

let trenutnoLeto = 2023;

if (prestopnoLeto(trenutnoLeto)) {
    console.log(`Leto ${trenutnoLeto} je prestopno`);
} else {
    console.log(`Leto ${trenutnoLeto} ni prestopno`);
}
```

Če smo natančni, lahko vidimo da bi v prvem primeru funkcijo lahko zapisali tudi tako:

```js
function prestopnoLeto(leto) {
    return leto % 4 === 0;
}
```

- Dodaj pogoj v funkcijo `prestopnoLeto(leto)`, ki preveri, ali je leto prestopno, če upoštevamo tudi 100 letno pravilo. Funkcija naj vrne `true` ali `false`.

```js
function prestopnoLeto(leto) {
    if (leto % 4 === 0) {
        return leto % 100 !== 0;
    } 

    return false;
}
```


- Dodaj pogoj v funkcijo `prestopnoLeto(leto)`, ki preveri, ali je leto prestopno, če upoštevamo tudi 400 letno pravilo. Funkcija naj vrne `true` ali `false`.

```js
function prestopnoLeto(leto) {
    if (leto % 4 === 0) {
        if (leto % 400 === 0) {
            return true;
        } else {
            return leto % 100 !== 0;
        }
    } 

    return false;
}
```

Še nekoliko lahko dodatno poenostavimo kodo:

```js
function prestopnoLeto(leto) {
    if (leto % 4 === 0) {
        if (leto % 400 === 0)
            return true;
     
        return leto % 100 !== 0;
    } 

    return false;
}
```

## Naloge

> V kolikor v nalogi piše, da je argument nekega tipa, to pomeni samo, da predpostavimo, da funkcije ne kličemo s napačnim tipom. Npr. funkcijo `sodoAliLiho` bomo klicali samo s števili npr. `sodoAliLiho(5)` in ne `sodoAliLiho("hoj")`.

Poskusite čim večkrat shraniti svoje delo s sistemom `git` in nato narediti `push` na GitHub. Npr. po vsaki nalogi (3 zlata vredni ukazi so `git add .`, `git commit -m "Naredil 1. in 2. nalogo"`, `git push`).

- Napiši funkcijo `steviliStaEnaki`, ki sprejme dva argumenta. Oba argumenta sta tipa število. Če sta enaki, naj funkcijo izpiše `Število {prvo_število} je enako {drugo_število}`. Preverite ali funkcija pravilno deluje.

{% resitev  %}
```js
function steviliStaEnaki(a, b) {
    if (a === b) {
        console.log(`Število ${a} je enako ${b}`);
    }
}
```
{% /resitev %}

- Napiši funkcijo `sodoAliLiho`, ki sprejme en argument tipa število. V kolikor je število sodo naj funkcija izpiše `Število {podano_število} je sodo`, če je pa liho `Število {podano_število} je liho`. Funkcijo pokliči trikrat s parametri `3`, `12` in `531`.

{% resitev  %}
```js
function sodoAliLiho(a) {
    if (a % 2 === 0) {
        console.log(`Število ${a} je sodo`);
    } else {
        console.log(`Število ${a} je liho`);
    }
}

sodoAliLiho(3); // Število 3 je liho
sodoAliLiho(12); // Število 12 je sodo
sodoAliLiho(531); // Število 531 je liho
```
{% /resitev %}

- Napiši funkcijo `kvadrant` ki sprejme X in Y koordinato točko. **Vrne** (NE izpiše) naj niz `"I"`, `"II"`, `"III"`, `"IV"`, glede na to v katerem kvadrantu leži podana točka. Če je točka izhodišče koordinatnega sistema (0,0) naj vrne funkcija "izhodišče". 
  - Za klic `kvadrant(1, 3)` pričakujemo vrnjeno vrednost `"I"`
  - Za klic `kvadrant(-1, 3)` pričakujemo vrnjeno vrednost `"II"`
  - Za klic `kvadrant(-1, -3)` pričakujemo vrnjeno vrednost `"III"`
  - Za klic `kvadrant(1, -3)` pričakujemo vrnjeno vrednost `"IV"`
  - Za klic `kvadrant(0, 0)` pričakujemo vrnjeno vrednost `"izhodišče"`

{% resitev  %}
```js
function kvadrant(x, y) {
    if (x === 0 && y === 0) {
        return "izhodišče";
    }

    if (x > 0 && y > 0) {
        return "I";
    }

    if (x < 0 && y > 0) {
        return "II";
    }

    if (x < 0 && y < 0) {
        return "III";
    }

    if (x > 0 && y < 0) {
        return "IV";
    }
}
```
{% /resitev %}

- Napiši funkcijo `steviloDni`, ki vrne število dni za določen mesec. Mesec je podan kot število v intervalu `[0, 11]`, kjer je `0` januar in `11` december. Poskušajte uporabiti **samo** en `if` pogojni stavek brez `else`-a (uporabite dejstvo, da `return` prekine delovanje funkcije). Uporabite google, če niste prepričani koliko dni imajo posamezni meseci:) **Manjši popravek:** Uporabite 2 if stavka, brez else stavka.

{% resitev  %}
```js
function steviloDni(mesec) {
    if (mesec === 0 || mesec === 2 || mesec === 4 || mesec === 6 || mesec === 7 || mesec === 9 || mesec === 11) {
        return 31;
    }

    if (mesec === 3 || mesec === 5 || mesec === 8 || mesec === 10) {
        return 30;
    }

    return 28;
}
```
{% /resitev %}

> Google je najmočnejše orodje programerjev

- Prejšnjo funkcijo dopolnite tako, da upošteva prestopno leto. Ne pisat svoje funkcije za prestopno leto, temveč uporabite funkcijo `prestopnoLeto`, ki smo jo obravnavali med uro.

{% resitev  %}
```js
function steviloDni(leto, mesec) {
    if (mesec === 0 || mesec === 2 || mesec === 4 || mesec === 6 || mesec === 7 || mesec === 9 || mesec === 11) {
        return 31;
    }

    if (mesec === 3 || mesec === 5 || mesec === 8 || mesec === 10) {
        return 30;
    }

    if (prestopnoLeto(leto)) {
        return 29;
    }

    return 28;
}
```
{% /resitev %}

> Ctrl+C, Ctrl+V je drugo najmočnejše orodje programerjev 

- Napiši funkcijo `najvecjeStevilo`, ki sprejme 3 argumente. Vsi 3 argumenti so števila. Funkcija naj izpiše katero število je največje.


{% resitev  %}
```js
function najvecjeStevilo(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
```
{% /resitev %}

- Napiši funkcijo `kalkulator`, ki sprejme 3 argumente. Prva 2 argumenta sta število, tretji argument pa je niz in predstavlja operatorja. Funkcija naj vrne rezultat operacije nad števili. V primeru nepodprtega operatorja naj vrne `0`. Naš kalkulator naj podpira seštevanje, odštevanje, deljenje, množenje. Primeri:
  - `kalkulator(2, 3, "seštej")` naj vrne `5`
  - `kalkulator(2, 3, "odštej")` naj vrne `-1`
  - `kalkulator(2, 3, "zmnoži")` naj vrne `6`
  - `kalkulator(2, 3, "deli")` naj vrne `0.666666`
  - `kalkulator(2, 3, "naredi backflip")` naj vrne `0`

{% resitev  %}
```js
function kalkulator(a, b, operator) {
    if (operator === "seštej") {
        return a + b;
    }

    if (operator === "odštej") {
        return a - b;
    }

    if (operator === "zmnoži") {
        return a * b;
    }

    if (operator === "deli") {
        return a / b;
    }

    return 0;
}
```
{% /resitev %}
