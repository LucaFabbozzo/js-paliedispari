// nome repo: **js-paliedispari**
// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// **Consigli del giorno**
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// Chiedere all’utente di inserire una parola
const parolaRichiesta = prompt('Inserisci una parola').toLowerCase();

//creo una constante che mi dara il valore della parola invertita con una funzione
const parolaInvertita = invertireParola(parolaRichiesta);

//faccio il mio controllo se la parola richiesta è uguale alla parola invertita

if(parolaRichiesta === parolaInvertita){
    console.log('è Palidroma');
  } else {
    console.log('non è Palidroma');
}

// funzione con ciclo for per poter invertire la parola

function invertireParola(string){
  let parolaInversa = '';

  for(let i = string.length - 1; i >= 0; i--) {
    parolaInversa += string[i];
  }
  
  return parolaInversa
}


