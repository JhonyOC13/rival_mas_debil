let currentStep = 0;
let totalAmount = 0;
const steps = document.querySelectorAll('.money-step');
const totalDisplay = document.querySelector('.money-total');

function markCorrect() {
    if (currentStep < steps.length) {
        const reverseIndex = (steps.length - 1) - currentStep;
steps[reverseIndex].classList.add('active');
currentStep++;
    } else {
        alert("¡Has alcanzado el tope de la escalera de dinero!");
    }
}

function bankAmount() {
    if (currentStep > 0) {
        const reverseIndex = steps.length - currentStep;
        const value = parseInt(steps[reverseIndex].getAttribute('data-value'));
        totalAmount += value;
        totalDisplay.innerText = `Total Acumulado: $${totalAmount}`;
        resetLadder();
    } else {
        alert("No hay dinero para acumular.");
    }
}

function markIncorrect() {
    if (currentStep > 0) {
        resetLadder();
    }
    resetLadder();
}

function resetLadder() {
    steps.forEach(step => step.classList.remove('active'));
    currentStep = 0;
}

function resetGame() {
    resetLadder();
    totalAmount = 0;
    totalDisplay.innerText = `Total Acumulado: $0`;
}