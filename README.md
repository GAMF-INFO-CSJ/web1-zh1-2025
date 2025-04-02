# web1-zh1-2025

## Előkészítés (Github 10%)

- [Feladat elfogadása a Github oldalon](https://github.com/web1-zh1-2025/web1-zh1-2025)
- A feladat elfogadás után válassza ki magát a listából.
- 10-15 másodperc alatt létre fog jönni egy saját repository, nyissa meg és klónozza le a gépére.
- Lépjen be a mappába és állítsa be VSCode workspace-nek: `code . -r`
- Telepítse a függőségeket: `npm install`
- Oldja meg a README.md-ben megadott feladatokat.
- A kész munkáját push-olja fel a github repository-ba.

## Előkészítés (HTML 20%)

- Hozzon létre a repo gyökerében egy index.html állományt és készítsen benne egy alap HTML struktúrát.
- Az oldal címe a "web1-zh1-2025" legyen.
- Készítsen egy 1-es szintű fejlécet a "Megoldások" szöveggel.
- Készítsen az 1-es szintű fejléc alá egy 2-es szintű fejlécet a "Rendelések" szöveggel.
- Készítsen egy rendezetlen listát, ami tartalmazza az alábbi elemeket:
  - Ragasztó
  - Élzáró
  - Kivetőpánt
- A lista az orders osztályhoz tartozzon.

## Egyedi design (CSS 30%)

- Hozzon létre egy külön CSS fájlt a repo gyökerében, style.css néven.
- Szúrja be a CSS fájlt az oldal fejlécébe.
- Állítsa be a CSS fájlban, hogy az összes egyes szintű fejléc:
  - színe kék legyen (blue)
  - betűmérete 30px legyen (30px)
  - fontosztása bold legyen (bold)
  - az alsó margója 5px legyen (5px)
- Állítsa be a CSS fájlban, hogy az összes kettes szintű fejléc:
  - színe sötétszürke legyen (darkgrey)
  - betűmérete 20px legyen (20px)
  - fontosztása bold legyen (bold)
  - az alsó margója 3px legyen (3px)
- Állítsa be a CSS fájlban, hogy az összes li elem, ami az orders osztályú listában van:
  - inline legyen, azaz ne egymás alatt, hanem sorban jelenjen meg
  - színe piros legyen (red)
  - betűmérete 15px legyen (15px)

## Bootstrap (40%)

- Hozzon létre a repo gyökerében egy users.html fájlt.
- A forráshoz használja a Bootstrap ajánlását, legyen betöltve a bootstrap.min.css fájl.
- Készítsen egy teljes navbart az oldal tetejére, menüpontokkal és kereső mezővel, a Bootstrap minta alapján.
- Legyen egy táblázat a users.html fájlban, ami a felhasználók adatait tartalmazza. Az adatok: name, email, phone, address. A table és table-striped osztályokhoz tartozzon. Az adatok szabadon választottak. Legyen legalább 10 adatsor a táblában.
- A táblázatban legyen egy extra oszlop a végén, ami funkció gombokat tartalmaz.
- Telepítse és szúrja be az oldalba a font-awesome ikonokat. Segítség: `npm i font-awesome`
- Három gomb legyen egy gombcsoportban minden sor végén:
  - edit, ikon: fa-pencil, stílus: primary
  - delete, ikon: fa-trash, stílus: danger
  - details, ikon: fa-eye, stílus: info
- A gombokat a Bootstrap minta alapján, a font-awesome ikonokkal kell készíteni.
