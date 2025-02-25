//! Snack 1
/* Crea una funzione che somma due numeri.

    Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

    Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
    
    Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */

/* Funziona dichiarativa */
function somma(num1, num2) {
  return num1 + num2;
}
console.log(somma(10, 10));

/* Funzione anonima assegnata ad una varabile */
const sommaAnonima = function (num1, num2) {
  return num1 + num2;
};

console.log(sommaAnonima(5, 5));

/* Arrow function */
const sommaArrow = (num1, num2) => num1 + num2;

console.log(sommaArrow(2, 2));

//! Snack 2
/* Crea una arrow function che calcola il quadrato di un numero.

    Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

/* Arrow function */
const quadrato = (num) => num * num;
console.log(quadrato(10));

//! Snack 3
/* Crea una funzione eseguiOperazione

    Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
    La funzione deve eseguire l'operazione fornita sui due numeri. */

const moltiplicazione = (num1, num2) => num1 * num2;

function eseguiOperazione(num1, num2, operazione) {
  return operazione(num1, num2);
}

console.log(eseguiOperazione(3, 5, somma));
console.log(eseguiOperazione(6, 5, moltiplicazione));

//! Snack 4
/* Crea un generatore di funzioni creaTimer

    Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

function creaTimer(tempo) {
  return function () {
    setTimeout(() => {
      console.log("Tempo scaduto!");
    }, tempo);
  };
}
const timer = creaTimer(1000);
console.log(timer());

//! Snack 5
/* Crea una funzione stampaOgniSecondo con setInterval.

    Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

    Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script. */

function stampaOgniSecondo(messaggio) {
  console.log(messaggio);
}

const stampaMessaggio = setInterval(() => stampaOgniSecondo("Ciao"), 1000);

function stop() {
  clearInterval(stampaMessaggio);
}
stop();

//! Snack 6
/* Crea un contatore automatico con setInterval

    Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/

function creaContatoreAutomatico(intervallo) {
  let count = 0;
  return function () {
    setInterval(() => {
      count++, console.log(count);
    }, intervallo);
  };
}

const counter = creaContatoreAutomatico(1000);

//! Snack 7
/* Crea una funzione che ferma un timer dopo un certo tempo

    Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/

function eseguiEferma(messaggio, avvio, stop) {
  const startPrint = setInterval(() => {
    console.log(messaggio);
  }, avvio);

  setTimeout(() => {
    startPrint, console.log("Stop eseguito");
  }, stop);
}

// eseguiEferma("Messaggio stampato", 1000, 10000);
