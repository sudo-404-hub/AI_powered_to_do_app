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














  // Get references to the button and audio element
  const lofySongButton = document.getElementById('lofySongButton');
  const lofySong = document.getElementById('lofySong');

  // Function to toggle play/pause of the audio
  function toggleAudio() {
      if (lofySong.paused) {
          lofySong.play(); // Play the audio if it's paused
          lofySongButton.textContent = 'Pause Lo-fi Beats'; // Change button text
          lofySongButton.classList.remove('paused'); // Remove paused class
          lofySongButton.classList.add('playing'); // Add playing class
      } else {
          lofySong.pause(); // Pause the audio if it's playing
          lofySongButton.textContent = 'Play Lo-fi Beats'; // Change button text
          lofySongButton.classList.remove('playing'); // Remove playing class
          lofySongButton.classList.add('paused'); // Add paused class
      }
  }

  // Add event listener to the button
  lofySongButton.addEventListener('click', toggleAudio);










        // Dark mode toggle functionality
        const darkModeButton = document.getElementById('darkModeButton');
        let isDarkMode = false;

        // Handle dark mode toggle
        darkModeButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            isDarkMode = !isDarkMode; // Toggle the dark mode state

            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                darkModeButton.querySelector('button').textContent = 'Light mode'; // Change button text
            } else {
                document.body.classList.remove('dark-mode');
                darkModeButton.querySelector('button').textContent = 'Dark mode'; // Change button text back
            }
        });




        

        // Event listeners for ON/OFF buttons
        document.getElementById('pomoON').addEventListener('click', function () {
            document.getElementById('my_pomodoro').style.display = 'block'; // Show Pomodoro div

            // Set pomoON button to active and pomoOFF to inactive
            this.classList.add('button-on');
            this.classList.remove('button-inactive');
            document.getElementById('pomoOFF').classList.add('button-inactive');
            document.getElementById('pomoOFF').classList.remove('button-off');
        });

        document.getElementById('pomoOFF').addEventListener('click', function () {
            document.getElementById('my_pomodoro').style.display = 'none'; // Hide Pomodoro div

            // Set pomoOFF button to active and pomoON to inactive
            this.classList.add('button-off');
            this.classList.remove('button-inactive');
            document.getElementById('pomoON').classList.add('button-inactive');
            document.getElementById('pomoON').classList.remove('button-on');
        });

























