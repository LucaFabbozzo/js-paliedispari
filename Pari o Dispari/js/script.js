// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const output = document.querySelector('.output');
const input = document.querySelector('[type="text"]');
const inputDue = document.querySelector('[type="number"]');
const btn = document.querySelector('.btn');
const btnDue = document.querySelector('.btn_due');

let scelta;
let numeroUtente;
let numeroComputer;
let somma;

btn.addEventListener('click', btnTop);
btnDue.addEventListener('click', btnBottom);


function btnTop() {
  scelta = input.value.toLowerCase().trim();
  input.value = '';
}


function btnBottom(){
  numeroUtente = inputDue.valueAsNumber;
  inputDue.value = '';
  numeroComputer = getRandomNumber(1, 5);
  somma = numeroUtente + numeroComputer;
  pari_dispari();
}



function pari_dispari() {
  if(somma % 2 === 0 && scelta === 'pari') {
    output.innerText = 'Hai Vinto! 😉'
  } else if(somma % 2 !== 0 && scelta === 'dispari') {
    output.innerText = 'Hai Vinto! 😉'
  } else if(somma % 2 === 0 && scelta === 'dispari') {
    output.innerText = 'Hai Perso 🥲'
  } else if(somma % 2 !== 0 && scelta === 'pari') {
    output.innerText = 'Hai Perso 🥲'
  }
}


function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

