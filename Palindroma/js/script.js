// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parola = document.querySelector('.parola');
const output = document.querySelector('.output');

const parolaRichiesta = prompt('Inserisci una parola').toLowerCase().trim();


const parolaInvertita = invertireParola(parolaRichiesta);

const risultato = checkPalindroma(parolaRichiesta, parolaInvertita);


parola.innerText = parolaRichiesta;
output.innerText = risultato;


function invertireParola(string){
  let parolaInversa = '';

  //metodo con ciclo for
  // for(let i = string.length - 1; i >= 0; i--) {
  //   parolaInversa += string[i];
  // }


  //metodo con formula 
  //split('') => splittando una stringa ottengo un array tanto quanto sono i caratteri della stringa
  //reverse() => gira un'array
  //join() prende tutti gli elementi di un'array e li concatena in una stringa
  parolaInversa = string.split('').reverse().join('');

  return parolaInversa
}


//funzione per verificare se una parola è palindroma o meno
function checkPalindroma(parolaRichiesta, parolaInvertita) {
  if (parolaRichiesta === parolaInvertita) return 'PALINDROMA'
   return 'NON PALINDROMA';
  }









