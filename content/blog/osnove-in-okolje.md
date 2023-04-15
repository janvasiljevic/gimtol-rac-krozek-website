---
external: false
title: Osnove in okolje
description: Kako in kje deluje javascript
date: 2023-01-25
draft: false
---

## Javascript

Javascript je splošno namenski programski jezik, ki se uporablja predvsem za namene spletnih aplikacij.  

Je najbolj uporabljen programski jezik na svetu.

Velikokrat se uporablja za namene spreminjanja elementov na spletnih straneh (interaktivnost spletnih strani) ter za komunikacijo s strežnikom in pridobivanje podatkov na strani.

## Spletno okolje

Vsaka koda "živi" v nekem okolju kjer je po nekem postopku izvajana.
Kot zanimivost, poznamo jezike ki so **interpretirani** ali **prevajani**.  

Programski jezik [Go](https://go.dev/), se na primer iz svoje izvorne kode lahko **prevede** v datoteko .exe, ki jo lahko na Windows-ih zaganjamo neposredno.  

Naš jezik Javascript je primer **interpretiranega jezika**. Brskalnik našo izvorno kodo bere in sproti izvaja **(interpretira)**. Brez brskalnika ali drugega pogona (runtime-a) Javascript kode NE MOREMO izvajati.

### Minimalno okolje za izvajanje Javascript-a

Če želimo pognati najmanjši možen program, potrebujemo še HTML dokument v katerem definiramo osnovne podatke o strani, ter kodo, ki jo želimo pognati.

> Html velja za osnovni način opisa zgleda vsake spletne strani. Več o HTML-ju  lahko poiščete na internetu, vendar za razumevanje osnov programiranja to ni potrebno. Najbolje je, če si html dokument predstavljamo kot nujni okvir ki je za zagon kode potreben, ter ostalo za začetek pozabimo. Bolj podrobno na krožku.

Primer datoteke, ki nam omogoča zaganjati Javascript, zgleda tako:

```html
<!DOCTYPE html>
<html lang="en">

<!-- GLAVA DOKUMENTA -->
<head>
  <meta charset="UTF-8">
  <title>To bo napisano na zavihku</title>
</head>

<!-- TELO DOKUMENTA -->
<body>
  ojla
</body>

<!-- KODA -->
<script>
  // tukaj pride koda
</script>

</html>
```

Takšen dokument lahko sedaj poženemo (dvakrat kliknemo). Pognal se nam bo privzeti brskalnik ter zagnal našo kodo.

### HELLO WORLD

V svetu računalništva velja pravilo, da je prvi program, ki se ga napiše **Hello world!**.  
Tega seveda ne bomo kršili! Program, ki za nas pozdravi svet zgleda takole.  

```js
console.log("Hello world");
```

Ker bi bilo nesmiselno vedno pisati tudi celoten dokument, bomo od sedaj naprej kot primere pisali le Javascript kodo.  
Da lahko stvar poženemo, primer skopiramo, ter ga prilepimo med `<script>` in `</script>`.

>Kot vsi pametni ljudje, seveda uporabimo `Ctrl + C` `Ctrl + V` in ne _desni klik, kopiraj_, kot kakšni barbari !!

Končna koda zgleda tako.

```html
<!DOCTYPE html>
<html lang="en">

<!-- GLAVA DOKUMENTA -->
<head>
  <meta charset="UTF-8">
  <title>To bo napisano na zavihku</title>
</head>

<!-- TELO DOKUMENTA -->
<body>
  ojla
</body>

<!-- KODA -->
<script>
  console.log("Hello world");
</script>

</html>
```

Na tej točki, lahko poženemo svoj prvi program. Dokument shranimo ( `Ctrl + S` ) in ga odpremo z dvojnim klikom.  
In ... **Nič se ne zgodi??** Kam je program izpisal naš tekst?

### Developer tools - Orodje za razvijalce

Kar vidimo, je bela HTML stran, kar je smiselno. Nikjer nismo definirali nič kar bi stran spreminjalo.  
Če pogledamo podrobno `console.log(" ... ")` izpisuje v "konzolo". Da jo lahko vidimo, odpremo **Orodje za razvijalce**.

Pritisnemo bližnjico `F12` kar odpre okno, ki zgleda nekaj takega:

![Dev tools](/assets/img/devtools.png)

V vrstici zgoraj poiščemo razdelek "Console", ki nam odpre konzolo!

![Hello world](/assets/img/helloworld.png)

**Čestitke!** Napisali in pognali ste svoj prvi program!

### Ločene datoteke

Pri večjih projektih je nesmiselno in moteče gledati celoten HTML okvir, za to lahko celoten Javascript umaknemo v ločeno datoteko tipa `.js`.  
Vse naše datoteke pa uvozimo z `<script src="...">`.  
v **src** polju navedemo pot do datoteke.  

```js
// koda.js

console.log("Hello world");
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<!-- GLAVA DOKUMENTA -->
<head>
  <meta charset="UTF-8">
  <title>To bo napisano na zavihku</title>
</head>

<!-- TELO DOKUMENTA -->
<body>
  ojla
</body>

<!-- KODA -->
<script src="koda.js"></script>

</html>
```

Okvir smo s tem ločili od kode, ki jo pišemo.

```
- moja_mapa
  - index.html
  - koda.js
```
