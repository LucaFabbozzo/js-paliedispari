// nome repo: **js-paliedispari**
// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// Chiedere all’utente di inserire una parola
const parolaRichiesta = prompt('Inserisci una parola').toLowerCase();

//creo una constante che mi dara il valore della parola invertita con una funzione
const parolaInvertita = invertireParola(parolaRichiesta);

//faccio il mio controllo se la parola richiesta è uguale alla parola invertita

if(parolaRichiesta === parolaInvertita){
    console.log('è Palindroma');
  } else {
    console.log('non è Palindroma');
}

// funzione con ciclo for per poter invertire la parola

function invertireParola(string){
  let parolaInversa = '';

  for(let i = string.length - 1; i >= 0; i--) {
    parolaInversa += string[i];
  }

  return parolaInversa
}

