// ~~~~~~~~~ UVOD ~~~~~~~~~
// V kolikor v nalogi piše, da je argument nekega tipa, to pomeni samo, da predpostavimo, da funkcije ne kličemo s napačnim tipom. Npr. funkcijo sodoAliLiho bomo klicali samo s števili npr. sodoAliLiho(5) in ne sodoAliLiho("hoj").
// Poskusite čim večkrat shraniti svoje delo s sistemom git in nato narediti push na GitHub. Npr. po vsaki nalogi (3 zlata vredni ukazi so git add ., git commit -m "Naredil 1. in 2. nalogo", git push).
// Naloge in gradivo, s katerim si lahko pomagate so na voljo na spletni strani: https://gimtol-racunalniski-krozek.janvasiljevic.com/gradivo/funkcije/
// Naloge so tudi nekoliko lepše formatirane na spletni učilnici:)

let casZaNaloge = true;

if (casZaNaloge === true) {
  console.log("Hello, pa začnimo z nalogami!:)");
}

// 1. Napiši funkcijo steviliStaEnaki, ki sprejme dva argumenta. Oba argumenta sta tipa število. Če sta enaki, naj funkcijo izpiše "Število {prvo_število} je enako {drugo_število}"". Preverite ali funkcija pravilno deluje.

// 2. Napiši funkcijo sodoAliLiho, ki sprejme en argument tipa število. V kolikor je število sodo naj funkcija izpiše "Število {podano_število} je sodo", če je pa liho "Število {podano_število} je liho". Funkcijo pokliči trikrat s parametri 3, 12 in 531.

// 3. Napiši funkcijo kvadrant ki sprejme X in Y koordinato točko. Vrne (NE izpiše) naj niz "I", "II", "III", "IV", glede na to v katerem kvadrantu leži podana točka. Če je točka izhodišče koordinatnega sistema (0,0) naj vrne funkcija "izhodišče".
// - Za klic kvadrant(1, 3) pričakujemo vrnjeno vrednost "I"
// - Za klic kvadrant(-1, 3) pričakujemo vrnjeno vrednost "II"
// - Za klic kvadrant(-1, -3) pričakujemo vrnjeno vrednost "III"
// - Za klic kvadrant(1, -3) pričakujemo vrnjeno vrednost "IV"
// - Za klic kvadrant(0, 0) pričakujemo vrnjeno vrednost "izhodišče"

// 4. Napiši funkcijo steviloDni, ki vrne število dni za določen mesec. Mesec je podan kot število v intervalu [0, 11], kjer je 0 januar in 11 december. Poskušajte uporabiti samo en if pogojni stavek brez else-a (uporabite dejstvo, da return prekine delovanje funkcije). Uporabite google, če niste prepričani koliko dni imajo posamezni meseci:)
// Google je najmočnejše orodje programerjev

// 5. Prejšnjo funkcijo dopolnite tako, da upošteva prestopno leto. Ne pisat svoje funkcije za prestopno leto, temveč uporabite funkcijo prestopnoLeto, ki smo jo obravnavali med uro.
// Ctrl+C, Ctrl+V je drugo najmočnejše orodje programerjev

// 6. Napiši funkcijo najvecjeStevilo, ki sprejme 3 argumente. Vsi 3 argumenti so števila. Funkcija naj izpiše katero število je največje.

// 7. Napiši funkcijo kalkulator, ki sprejme 3 argumente. Prva 2 argumenta sta število, tretji argument pa je niz in predstavlja operatorja. Funkcija naj vrne rezultat operacije nad števili. V primeru nepodprtega operatorja naj vrne 0. Naš kalkulator naj podpira seštevanje, odštevanje, deljenje, množenje. Primeri:
// - kalkulator(2, 3, "seštej") naj vrne 5
// - kalkulator(2, 3, "odštej") naj vrne -1
// - kalkulator(2, 3, "zmnoži") naj vrne 6
// - kalkulator(2, 3, "deli") naj vrne 0.666666
// - kalkulator(2, 3, "naredi backflip") naj vrne 0
