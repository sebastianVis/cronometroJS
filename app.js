const buttonPlay = document.getElementById('buttonPlay');
const numeros = document.getElementById('numeros');
const buttonPause = document.getElementById('buttonPause');
const buttonEnd = document.getElementById('buttonEnd');
let num = 0;
let min = 0;
let hour = 0;
let intervalId; // Variable para almacenar el intervalo

buttonPlay.addEventListener("click", () => {
    intervalId = setInterval(() => {
      num++;
      numeros.textContent = `${hour} : ${min} : ${num}`;
      if (num == 60){
        min+=1;
        num = 0;
        if (min == 60){
          hour+=1;
          min = 0;
        }
      }
    }, 1000); // interval funciona para sumar en un bucle infinito en un tiempo establecido.
});

buttonPause.addEventListener("click", () => {
  clearInterval(intervalId); // Detener el intervalo
});

buttonEnd.addEventListener('click', () => {
  clearInterval(intervalId); // Detener el intervalo
  num = 0;
  numeros.textContent = `${num}`;
});

