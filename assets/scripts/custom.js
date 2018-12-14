"use strict" //griezciau kompiliuojamas kodas, i daugiau 
//klaidu kreipiamas demesys

console.log('JS veikia');

//kintamojo sukurimas
//atliekamas naudojant viena is komandu:
//var, let, const. Let scope mazesnis, greiciau atlaisvinama atmintis
//tada nurodomas kintamojo pavadinimas ir galima jam priskirti reiksme


let pasisveikinimas = "Sveiki";

//Noredami isvesti duomenis i console, naudosime:
//console.log komanda
//console.log(duomenys)


console.log(pasisveikinimas);


//Kintamuju pavadinimai negali prasideti skaiciumi, kiap ir ccs'o klases, html ID
//kintamuju pavadinimuose negalime naudoti tarpu
//pavadinimai yra "Case sensitive"
//
//Patikrinsime kintamojo duomenu tipa su:
//typeof(duomenys)
//
let tipas = typeof(pasisveikinimas);
//nustatome, kokie duomenys yra saugomi kintamajame pasisveikinimas
//rezultatas issaugomas i tipas

console.log(tipas);

let skaicius = 1;
let loginis = true;

console.log(typeof(skaicius));
console.log(typeof(loginis));

//Fragmentu apjungimas atliekant duomenu isvedima
//noredami isvesti kelis kintamuosius vienu metu
//arba prie kintamojo prideti teksta
//galime naudoti prijungimo simboli +
//

let zodis = 'atvyke';

console.log(pasisveikinimas + " " + zodis);
console.log(pasisveikinimas, zodis);

/* galimas ir toks komentaras
 *********************************************** */

//Tekstiniu eiluciu metodai ir savybes
//
zodis = "Pirmas";
//nustatome teksto eilutes ilgi
let ilgis = zodis.length;
console.log(ilgis);
console.log(zodis.length);

let uppercase = zodis.toUpperCase();
console.log(uppercase);

let lowercase = zodis.toLowerCase();
console.log(lowercase);

//Pozicijos teksto eiluteje prasides nuo 0
//
let raide = zodis.charAt(2);
console.log(raide);

//suzinome, kurioje pozicijoje prasideda ieskomas teksto fragmentas
//
let pozicija = zodis.indexOf(raide);
console.log(pozicija);

zodis = "bananans";
//
//sadas
//string.replace("to replace", "replace with")
//string.substring("from", "to"(optional)) // substr

/************************************
skaiciu metodai	
**************************************/

skaicius = 12.47545
let tekstas1 = "12.47545 su tekstu"

let konvertuotas = parseInt(tekstas1);
console.log(konvertuotas);

// kiek skaiciu po kablelio skaicius.toFixed(2)
// isviso kiek skaitmenu skaicius.toPrecision(2)
//
let a = true;
let palyginimas = (a == 1);
console.log(palyginimas);




//Kęstutis Gimbutas
//2018-12-10

// Javascript užduotis
// DEADLINE: 9:00
// atsiusti tik JS faila, tik reikia pakeisti galune i .txt

// Šiuo metu Lietuvoje yra 69 laipsniai pagal Farenheitą, naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

// Būtinos sąlygos:
// - Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsniai pagal Celsijų"
// - Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
// - Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
// - Rezultatą išvesti konsolėje

// Sprendimo variantai:
// 1 panaudoti replace()
// 2 panaudoti substring() arba substr()

// Rezultatas:
// Lietuvoje šiuo metu 20.6 laipsniai pagal Celsijų
// Papildoma uzduotis, kad rezultatas butu:
// Lietuvoje šiuo metu 20.5 laipsniai pagal Celsijų

let tekstas = "Lietuvoje šiuo metu laipsniai pagal Celsijų";
let tempF = 69;
let tempC = (tempF - 32) * 5/9;
//variantas[1]
//replace()
let isvedamastxt1 = tekstas.replace("metu laipsniai ", "metu "+ tempC.toFixed(1) + " laipsniai " );
console.log(isvedamastxt1);
//variantas[2.1]
//substring()
let isvedamastxt2_1 = tekstas.substring(0, 20) + tempC.toFixed(1) + " " + tekstas.substring(20,43);
console.log(isvedamastxt2_1);
//variantas[2.2]
//substr()
let isvedamastxt2_2 = tekstas.substr(0, 20) + tempC.toFixed(1) + " " + tekstas.substr(20,23);
console.log(isvedamastxt2_2);
//papildoma uzduotis
//mod
let tempC_rounded = tempC - tempC % 0.1;
let isvedamastxtbonus = tekstas.replace("metu laipsniai ", "metu "+ tempC_rounded + " laipsniai " );
console.log(isvedamastxtbonus);