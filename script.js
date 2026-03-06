let display = document.getElementById('display');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let minutesInput = document.getElementById('minutesInput');
let unitBtns = document.querySelectorAll('.unitBtn');

let timer = null;
let timeLeft = 0;          // ✅ fixed variable name
let selectedUnit = 'sec';  // tracks which unit is active

// Handle unit button clicks
unitBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    unitBtns.forEach(b => b.classList.remove('active')); // deselect all
    btn.classList.add('active');                          // highlight clicked one
    selectedUnit = btn.id.replace('Btn', '');            // sets 'sec', 'min' or 'hr'
  });
});

function startTimer() {
  let inputValue = minutesInput.value;

if (!inputValue || inputValue <= 0) {
    alert('Please enter a valid number!');
    return;
  }
let value = parseFloat(inputValue); // ✅ converts string to number

if (selectedUnit === 'sec') {
    timeLeft = value;
} else if (selectedUnit === 'min') {
    timeLeft = value * 60;
} else if (selectedUnit === 'hr') {
    timeLeft = value * 3600;
}

  clearInterval(timer);

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      display.textContent = "Time's up!";
      return;
    }

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    display.textContent =
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0');

    timeLeft--;
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 0;
  display.textContent = '00:00';
  minutesInput.value = '';
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);