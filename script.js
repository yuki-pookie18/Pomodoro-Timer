let display = document.getElementById('display');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let minutesInput = document.getElementById('minutesInput');

let timer = null;
let remainingTime = 0;

function startTimer() {
    let inputValue = minutesInput.value;

    if (inputValue <= 0 || inputValue === '') {
        alert('Please enter a valid number of minutes.');
        return;
    }

    timeLeft = inputValue * 60;
    clearInterval(timer);

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            display.textContent = 'Time\'s up!';
            return;
        }

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timeLeft--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    display.textContent = '00:00';
    minutesInput.value = '';
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);