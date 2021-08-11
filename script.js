const timer = document.querySelector('.timer');

const btnInit = document.querySelector('.init');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');


let seconds = 0;

let playTimer;

function timerInit(){
   playTimer = setInterval(()=> {
    seconds++;
    timer.innerHTML = criarHoraSegundos(seconds);
  }, 1000);
}

//criar horario a partir da quantidade de segundos
function criarHoraSegundos(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
}


btnInit.addEventListener('click', () => {
  clearInterval(playTimer);
  timerInit();
  timer.classList.remove('pauseActive');
});

btnPause.addEventListener('click', ()=> {
  clearInterval(playTimer);
  timer.classList.add('pauseActive');
})

btnReset.addEventListener('click', ()=> {
  seconds = 0;
  timer.innerHTML = criarHoraSegundos(seconds);
  clearInterval(playTimer);
  timer.classList.remove('pauseActive')
})