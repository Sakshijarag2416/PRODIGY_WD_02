let time = 0;
let timer;
let running = false;

function formatTime(t) {
  const hrs = String(Math.floor(t / 3600)).padStart(2, '0');
  const mins = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
  const secs = String(t % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  document.getElementById('display').textContent = formatTime(time);
}

function start() {
  if (!running) {
    timer = setInterval(() => {
      time++;
      updateDisplay();
    }, 1000);
    running = true;
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  time = 0;
  updateDisplay();
  running = false;
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (running) {
    const lapTime = formatTime(time);
    const li = document.createElement('li');
    li.textContent = `Lap ${document.getElementById('laps').children.length + 1}: ${lapTime}`;
    document.getElementById('laps').appendChild(li);
  }
}

updateDisplay();
