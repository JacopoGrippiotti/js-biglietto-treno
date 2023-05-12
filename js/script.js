let kmDaPercorrere = prompt("Quanti chilometri devi percorrere con il treno?");

let etàPasseggero = parseInt(prompt("inserisci la tua età"));

let prezzoBiglietto = 0.21 * kmDaPercorrere;

let scontoVenti = 20 / 100;

let scontoQuaranta = 40 / 100;

if (etàPasseggero < 18);{
    
    prezzoBiglietto -= (scontoVenti * prezzoBiglietto);
}

document.getElementById("gino").innerHTML = prezzoBiglietto;