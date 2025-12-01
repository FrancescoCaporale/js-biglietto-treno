

//Input utente//
const userAge = Number(prompt("Quanti anni hai?"));
const userKm = Number(prompt("Inserisci i km da percorrere:"));

console.log("Età:", userAge);
console.log("Km:", userKm);

//Apllicazione sconti//
if (userAge<18) {
    console.log("Utente Minorenne - Sconto 20%");
} else if (userAge >= 65) {
    console.log("Utente Senior - Sconto 40%");
} else {
    console.log("Nessuno Sconto Applicato");
}

//CAlcolo prezzo//
let ticketPrice = userKm * 0.21;
console.log("Prezzo base:", ticketPrice);

//Output//
console.log("Prezzo finale:", finalPrice + "€");