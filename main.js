// العناصر من DOM
const userGuessInput = document.getElementById('userGuess');
const submitGuessBtn = document.getElementById('submitGuess');
const resultText = document.getElementById('result');
const attemptsText = document.getElementById('attempts');

// توليد رقم عشوائي للكمبيوتر بين 1 و 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

// إضافة مستمع حدث لزر "تخمين"
submitGuessBtn.addEventListener('click', function () {
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess)) {
        resultText.textContent = 'Feild Number';
    } else {
        attempts++;
        if (userGuess === secretNumber) {
            resultText.textContent = `Yes This IS The Number: ${secretNumber}`;
            attemptsText.textContent = `Number Of Attempts Is: ${attempts}`;
            submitGuessBtn.disabled = true;
        } else if (userGuess < secretNumber) {
            resultText.textContent = 'Larger Than';
        } else {
            resultText.textContent = 'Smaller Than';
        }
    }
});

function hideDiv() {
    var div = document.getElementById("overflow-js");
    div.style.display = "none";
}