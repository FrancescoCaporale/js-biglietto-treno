

//Input utente//
const userAge = Number(prompt("Quanti anni hai?"));
const userKm = Number(prompt("Inserisci i km da percorrere:"));

console.log("Età:", userAge);
console.log("Km:", userKm);

//CAlcolo prezzo//
let ticketPrice = userKm * 0.21;
console.log("Prezzo base:", ticketPrice);

//Apllicazione sconti//
if (userAge<18) {
     ticketPrice = ticketPrice * 0.8;
    console.log("Utente Minorenne - Sconto 20%");
} else if (userAge >= 65) {
     ticketPrice = ticketPrice * 0.6;
    console.log("Utente Senior - Sconto 40%");
} else {
    console.log("Nessuno Sconto Applicato");
}

const finalPrice = ticketPrice.toFixed(2)

//Output//
console.log("Prezzo finale:", ticketPrice + "€");