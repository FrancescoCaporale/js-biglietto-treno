

//Input utente//
const userAge = Number(prompt("Quanti anni hai?"))

console.log("Età:", userAge)

//Apllicazione sconti//
if (userAge<18) {
    console.log("Utente Minorenne - Sconto 20%")
} else if (userAge >= 65) {
    console.log("Utente Senior - Sconto 40%")
} else {
    console.log("Nessuno Sconto Applicato")
}