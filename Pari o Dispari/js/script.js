// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// **Consigli del giorno**
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


//l'utente sceglie paro o dispari;
const scelta = prompt('Giochiamo! Pari o Dispari?').toLowerCase();

//l'utente inserisce un numero da uno a 5;
const numeroUtente = parseInt(prompt('inserisci un numero compreso tra 1 e 5'));

//generiamo un numero random, che sarà il computer da 1 a 5;

const numeroComputer = Math.floor(Math.random() * 5) + 1;

// sommiamo il numero dell'utente a quello del computer

const somma = numeroUtente + numeroComputer;

console.log(somma)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// stabiliamo il vincitore

function pari_dispari() {
  if(somma % 2 === 0 && scelta === 'pari') {
    console.log('hai vinto');
  } else if(somma % 2 !== 0 && scelta === 'dispari') {
    console.log('hai vinto');
  } else if(somma % 2 === 0 && scelta === 'dispari') {
    console.log('hai perso');
  } else if(somma % 2 !== 0 && scelta === 'pari') {
    console.log('hai perso');
  }
}

console.log(pari_dispari())



