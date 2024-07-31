// run pomodoro timer
let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert("Time's up! Take a break.");
                resetTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateDisplay();
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();






































