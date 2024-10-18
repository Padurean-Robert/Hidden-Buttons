function createButton(index, winnerIndex) {
    const button = document.createElement('button');
    button.innerText = `Button ${index + 1}`;
    button.classList.add('btn', 'btn-primary', 'm-2');

    button.addEventListener('click', function () {
        displayResult(index === winnerIndex);
    });

    return button;
}

function displayResult(isWinner) {
    const resultText = document.getElementById('result');
    if (isWinner) {
        resultText.innerHTML = `<span class="text-success">Congratulations! This is the winning button!</span>`;
    } else {
        resultText.innerHTML = `<span class="text-danger">This is not the winning button.</span>`;
    }
}

function generateButtons(n) {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = "";
    const winnerIndex = Math.floor(Math.random() * n);

    for (let i = 0; i < n; i++) {
        const button = createButton(i, winnerIndex);
        buttonContainer.appendChild(button);
    }
}

function handleButtonGeneration() {
    const input = document.getElementById('num-buttons-input').value;
    const numButtons = parseInt(input, 10);

    if (!isNaN(numButtons) && numButtons > 0) {
        generateButtons(numButtons);
    } else {
        alert("Please enter a valid number greater than 0.");
    }
}