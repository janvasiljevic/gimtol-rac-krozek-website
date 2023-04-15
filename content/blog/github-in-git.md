---
external: false
title: GitHub in Git
description: Kaj je GitHub in kako ga uporabljati
date: 2023-01-31
draft: false
---

Tekom krožka bomo spisali veliko vrstic kode. Tako kot želimo za vedno shraniti naš esej pri slovenščini (no vsaj tisti, ki ste bili zadovoljni z njim), želimo tudi za vedno shraniti našo kodo. Za ta bomo uporabljali spletno platformo [GitHub](https://github.com/) in orodje [Git](https://git-scm.com/). Čeprav imata podobno ime, sta dve različni stvari.

## Uvod

### Git 

Git je tako imenovan `version control system` - sistem za obvladovanje verzij. Pomaga nam shranjevati različne verzije naše kode. Z Git-om lahko kadarkoli zavrtimo naš projekt nazaj na kakšno prejšnjo verzijo. Tako lahko kadarkoli popravimo napako, ki smo jo naredili, ter se vrnemo na verzijo, ki je še delovala.

O Git-u lahko razmišljamo kot o zvezku za šolski projekt. Vsakič ko kaj spremenimo ali dodamo v projekt izvedemo nov "commit" v Git-u. To ustvari novo verzijo projekta, tako da lahko pogledamo prejšnje verzije projekta, če si jih želimo ogledati. Vsak "commit" ima tudi svoj opis, ki služi kot razlaga, kaj smo spremenili v projektu.

{% youtube url="https://www.youtube.com/embed/hwP7WQkmECE" label="Razlaga Git-a v 100 sekundah" /%}

### GitHub

![gthub image](/assets/img/github-octocat.png)

GitHub je spletna platforma za shranjevanje Git projektov. Neke vrste "Google Drive" za našo kodo.  
Je brezplačen in de-facto standard za shranjevanje Git projektov. Tekom krožka ga bomo uporabljali za shranjevanje naših projektov. Na GitHub-ovi [strani](https://github.com/) ustvarite svoj račun.

## Uporaba

### Ukazno okno - terminal

Programerji vedno optimiziramo vse kar delamo tako, da smo čim hitrejši.  
Hitro smo ugotovili da je uporaba miške počasna, za to radi uporabljamo bljižnice na tipkovnici. Kaj šele če bi se miške povsem znebili, ter uporabljali izključno tekstovni umesnik, v katerem bi se vse ukaze izvedlo z tipkanjem?

**Moj termnal**
![screenshot terminala](/assets/img/git/cmd.png)

Terminal je orodje, ki ga programerji nenehno uporabljamo saj je najhitrejši način za izvajanje prgramov, ter premikanje po datotekah.  
Okno lahko odpremo tako, da v iskalni meni napišemo `cmd`. Če ga želimo odpreti v svoji mapi, pa lahko z bližnico `shift` + `desni klik`, `odpri ukazno okno tukaj`.

Samo o terminalu bi lahko napisali več poglavji. Mi se bomo omejili le na uporabo z orodjem **git**

### Osnovno delovanje git-a

Kodo, ki jo pišemo organiziramo v **repozitorije**. Repozitorij je mapa (folder), v kateri so vse datoteke in koda, ki jo za projekt potrebujemo.  
Repozitorij te spletn strani, vsebuje vso kodo, slike, text, ... ki jo spletna stran potrebuje za delovanje.  

Če želimo svojo kodo shraniti, najprej odpremo terminal v mapi, kjer hranimo kodo.  

>Ta, vrhnja mapa, je zelo pomemben del vsakega projekta, ter ima zato več imen.  
>Pogosto slišimo da je to **root** (koren) ali pa **working directory** (delavno okolje).  

Recimo da imamo javascript projekt, z HTML dokumentom, nekaj .js datotek in ikono za našo stran.  
V terminal vnesemo ukaz, za ustvarjanje novega lokalnega repozitorija

```bash
git init
```

Git nam pove, da je ustvaril repozitorij: 

```text
Initialized empty Git repository in /home/lan/Desktop/gimtol-rac-krozek-website/test/.git/
```
![git 1](/assets/img/git/git1.png)

Kodo smo vključili v repozitorji, ševedno pa moramo git-u povedati, da spremembam datotek sledi.
To storimo z `git add .`. S tem ukazom smo povedali, da želimo, da se spremembe hranijo za vse datoteke v delavnem okolju.  

![git 2](/assets/img/git/git2.png)

Ko datoteko spremenimo, spremembe uveljavimo / **commit**-amo. Za nas to naredi ukaz `git commit -m "popravljena napaka v kodi."`.  
Spremembe shranimo, skupaj z kratkim opisom spremembe, napisanem v navednicah.

Git tako na našem računalniku shrani spremembe. Shranili smo si stanje vseh datotek na neki točki v času.

![git 3](/assets/img/git/git3.png)

Kadarkoli v prihodnosti se lahko vrnemo na katerokoli prejšnjo verzijo. Tako, nam ni treba nikol skrbeti, da kodo preveč pokvarimo med programiranjem.

Da bi lahko projekt dostopali od povsod, ga je treba shraniti tudi na GitHub. To naredimo z ukazom `git push`, ki **vse** naše lokalne verzije shrani na odaljenem repozitoriju, dostopnemu nam in skupini s katero delamo.

![git 4](/assets/img/git/git4.png)

Koda je sedaj objavljena. Vsak, ki ima do repozitorija dostop, lahko kodo _povleče_ k sebi.  

Če bi želeli kodo deliti z prijateljem, lahko ta kodo klonira na lastni računalnik z ukazom `git clone git@github.com:MojeIme/ime-repozitorija.git`.

![git 5](/assets/img/git/git5.png)

Datoteke se iz oddaljenega repozitorija, kjer se koda hrani, kopirajo v mapo na prijateljevem računalniku. Git tudi sam inicializira nov projekt, tako da lahko sedaj oba uporabljat ukaze `push` in `pull` (in druge...)  in s tem na projektu sodelujeta.  

## Povzetek ukazov  

| Ukaz | opis |
| :--- | :---|
| `git init` | ustvarjanje praznega repozitorija |
| `git add` | dodajanje datotek, ki želimo da jim git sledi |
| `git commit -m "opis spremembe"` | Hranjenje sprememb - uveljavljanje |
| `git push` | Potiskanje sprememb na GitHub |
| `git clone git@github...` | Kloniranje oddaljenega repozitorija |

## Zaključek in motivacija  

Čeprav bomo mi uporabljli git predvsem za shranjevanje kode, je orodje večkrat uporabljeno za poenostvljeno sodelovanje z skupino razvijalcev.  
Git je uporabljen po celem svetu na vseh programerskih podjetjih, ter je pričakovano znanje pri zaposlitvi.  

Na istem projektu lahko sodeluje veliko ljudi. V razvoju operacijskega sistema Linux aktivno sodeluje več tisoč ljudi, repozitorij pa je javno objavljen [tukaj](https://github.com/torvalds/linux). Ob času pisanja je imel projekt čez **miljon** commitov ter okoli **18.000 razvijalcev**

Ker je celotna koda projekta javna dostopna ter objavljena, spada pod posebno vrsto zastonjske programske opreme. To so **odprtokodni** projekt ali **open source** projekti.  