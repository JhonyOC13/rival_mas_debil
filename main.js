let currentStep = 0;
let totalAmount = 0;
let grandTotal = 0;
const steps = document.querySelectorAll('.money-step');
const totalDisplay = document.querySelector('.money-total');
const grandTotalDisplay = document.querySelector('.grand-total');

function markCorrect() {
    if (totalAmount >= 500) {
        alert("¡Máximo alcanzado! La ronda se termina.");
        return;
    }
    if (currentStep < steps.length) {
        const reverseIndex = (steps.length - 1) - currentStep;
steps[reverseIndex].classList.add('active');
currentStep++;
    } else {
        bankAmount();
    }
}

function bankAmount() {
    if (currentStep > 0) {
        const reverseIndex = steps.length - currentStep;
        const value = parseInt(steps[reverseIndex].getAttribute('data-value'));
        
        if (totalAmount + value > 500) {
            alert("¡Máximo alcanzado! La ronda se termina.");
            totalAmount = 500;
            //grandTotal += totalAmount;
            updateDisplays();
            resetLadder();
            return;
        }
        
        totalAmount += value;
        //grandTotal += totalAmount;
        updateDisplays();
        resetLadder();
    } else {
        alert("No hay dinero para acumular en banco.");
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

function resetRound() {
    grandTotal += totalAmount;
    resetLadder();
    totalAmount = 0;
    updateDisplays();
}

function resetGame() {
    resetLadder();
    totalAmount = 0;
    grandTotal = 0;
    updateDisplays();
}

function updateDisplays() {
    totalDisplay.innerText = `Total Ronda: $${totalAmount}`;
    grandTotalDisplay.innerText = `Total General: $${grandTotal}`;
}