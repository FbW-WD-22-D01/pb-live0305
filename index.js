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

