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


// NUmber Object - verschiedene Funktionen bezüglich Zahlen
const test = Number.isInteger("1");
console.log(test);

// toFixed()
let numToCut = 1.234
console.log(numToCut.toFixed()); //erzeugt ein String und kürzt Nachkommstellen

// Probleme bei zu großen Zahlen
console.log(10**10000000); // wenn ihr zu große Zahlen habt erreicht ihr infinity

// Infinity
let unendlich = Infinity;
console.log(typeof unendlich); //Inifinity ist eine undlich große Number

console.log(10**1000 === Infinity); // Infinity kann behandelt werden wie eine Zahl

// NaN
console.log(NaN === NaN);
let schwierig = NaN; // ist eine Number, kann aber nicht verglichen werden
schwierig === NaN ? console.log('Wird niemals erscheinen') : console.log("Ist immer false");
console.log(Number.isNaN(schwierig));

// Exponentenschreibweise
console.log(98e6);
console.log(98e-6);


