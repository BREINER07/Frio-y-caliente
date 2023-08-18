const targetNumber = Math.floor(Math.random() * 500) + 1;
let guessCount = 0;

document.getElementById("checkButton").addEventListener("click", checkGuess);

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  guessCount++;

  if (guess === targetNumber) {
    displayHint("¡Has adivinado el número en " + guessCount + " intentos! ¡Ganaste!");
  } else {
    const difference = Math.abs(targetNumber - guess);
    const hint = difference <= 25 ? "¡Estás caliente!" : "Estás frío.";
    displayHint(hint);
  }

  guessInput.value = "";
  guessInput.focus();
}

function displayHint(message) {
  const hintElement = document.getElementById("hint");
  hintElement.textContent = message;
}
