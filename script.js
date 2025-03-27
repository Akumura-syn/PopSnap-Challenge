// script.js
document.getElementById('checkButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);
    const resultDisplay = document.getElementById('resultDisplay');

    if (isNaN(number)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }

    if (number % 4 === 0 && number % 6 === 0) {
        resultDisplay.textContent = "PopSnap";
    } else if (number % 4 === 0) {
        resultDisplay.textContent = "Pop";
    } else if (number % 6 === 0) {
        resultDisplay.textContent = "Snap";
    } else {
        resultDisplay.textContent = number;
    }
});