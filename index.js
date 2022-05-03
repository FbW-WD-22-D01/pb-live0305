// Nummern:

let zahl1 = 2;
let zahl2 = "12";

// erzeugt einen neuen String
console.log(zahl1 + zahl2);

// Einen String in eine Integer umwandeln
let numAusString = parseInt(zahl2);
console.log(typeof numAusString);


// Kann auch andere Zahlenräume verwenden
let hex = "ff";
let newInteger = parseInt(hex, 16); 
console.log(newInteger);

// Das Gegenstück dazu
console.log('Umwandlung in String:', zahl1.toString());

// parseFloat vs parseInt
console.log(parseFloat("1.2345em"));
console.log(parseInt("1.234em"));

// toFixed()
let numToCut = 1.234
console.log(numToCut.toFixed()); //erzeugt ein String und kürzt Nachkommstellen


// Number Object - verschiedene Funktionen bezüglich Zahlen
let isInteger = Number.isInteger("1"); // überprüft ob es sich um eine Integer handelt - hier false
let isNaN = Number.isNaN(1); // überprüft ob es sich um NaN handelt - hier false
console.log(isInteger, isNaN);

// Number hat auch statische Werte (größte Zahl etc.)
console.log(Number.MAX_SAFE_INTEGER); //größte sicher zu rechnende Integer



// Probleme bei zu großen Zahlen
console.log(10**10000000); // wenn ihr zu große Zahlen habt erreicht ihr infinity


// Infinity
let unendlich = Infinity;
console.log(typeof unendlich); //Inifinity ist eine undlich große Number
console.log(10**1000 === Infinity); // Infinity kann behandelt werden wie eine Zahl


// NaN "Not a Number" - bei ungültigen (Zahlen-)Operationen wird dieser Wert erzeugt
console.log(NaN === NaN); // Ist der einzige Wert der unglech sich selbst ist
let schwierig = NaN; // ist eine Number, kann aber nicht verglichen werden
console.log(typeof schwierig);

schwierig === NaN ? console.log('Wird niemals erscheinen') : console.log("Ist immer false");
console.log(Number.isNaN(schwierig)); //nur so lässt sich überprüfen ob der Wert NaN vorliegt



// Exponentenschreibweise - zum Abbilden großer Zahlen
console.log(98e6);
console.log(98e-6);


// Math Object

// Was ist ein Objekt:
// let meinObjekt = {
//     name: "Christoph",
//     age: 38
// }

// console.log(meinObjekt.name);

// Math ist ein vordefiniertes Objekt
// Hat Konstante werte wie:
console.log(Math.PI);
console.log(Math.SQRT2);

let ganzzahl = 2;
let float   = 2.54; 

// vordefinierte Methoden

// Runden
console.log(Math.round(float)); // rundet nach Rundungsregeln
console.log(Math.floor(float)); // rundet nach unten
console.log(Math.ceil(float)); // rundet nach oben

// min und max
console.log(Math.max(1,2,30,45,5)); //sucht die größte Zahl aus einer Zahlenreihe
console.log(Math.min(23,45,2,3456)); //sucht die kleinste Zahl

// random erzeugt eine Zufallszahl zwischen 0 und 1
console.log('Zufallszahl zwischen 0 und 1:', Math.random());

// für größere Zufallszahl: multiplizieren mit der größten gwünschten Zahl
console.log(Math.random()*10);

// Für eine ganze Zufallszahl mit Math.floor (zum Abrunden) kombinieren
console.log("Zufallszahl:" ,Math.floor(Math.random()*10)); // erzeugt eine Zufallszahl zwischen 0-9(!!)


// BEISPIELE: 

// Zahlenraten
let meineZahl = 2
let random = Math.floor(Math.random()*10);
meineZahl === random ? console.log('Gewonnen') : console.log('Verloren!');


// Farbgenerator rgb --erzeuge eine random rgb Farbe
let beispielfarbe = "rgb(255,255,255)";

let rot = Math.floor(Math.random()*256);
let gruen = Math.floor(Math.random()*256);
let blau = Math.floor(Math.random()*256);

let unsereFarbe = `rgb(${rot}, ${gruen}, ${blau})`;
console.log(unsereFarbe);


