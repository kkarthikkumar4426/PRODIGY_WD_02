// Stopwatch logic
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');

let startTime = 0;
let elapsed = 0; // ms
let timerInterval = null;
let lapCounter = 0;

function formatTime(ms){
  const totalHundredths = Math.floor(ms/10);
  const hundredths = totalHundredths % 100;
  const totalSeconds = Math.floor(totalHundredths/100);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds/60) % 60;
  const hours = Math.floor(totalSeconds/3600);

  const pad = (n, z=2)=>String(n).padStart(z,'0');
  if(hours>0) return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(hundredths)}`;
  return `${pad(minutes)}:${pad(seconds)}.${pad(hundredths)}`;
}

function updateDisplay(){
  const now = performance.now();
  elapsed = now - startTime;
  display.textContent = formatTime(elapsed);
}

function start(){
  startTime = performance.now() - elapsed;
  timerInterval = setInterval(updateDisplay, 10);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  lapBtn.disabled = false;
  resetBtn.disabled = false;
}

function pause(){
  clearInterval(timerInterval);
  timerInterval = null;
  // keep elapsed as-is
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function reset(){
  clearInterval(timerInterval);
  timerInterval = null;
  elapsed = 0;
  display.textContent = '00:00.00';
  lapsList.innerHTML = '';
  lapCounter = 0;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
  resetBtn.disabled = true;
}

function lap(){
  lapCounter += 1;
  const li = document.createElement('li');
  li.innerHTML = `<span class="lap-num">Lap ${lapCounter}</span><span class="lap-time">${formatTime(elapsed)}</span>`;
  lapsList.prepend(li);
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

// initialize
display.textContent = '00:00.00';
