// Nummern:

let zahl1 = 11;
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
