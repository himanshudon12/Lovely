// script.js

const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

noButton.addEventListener('click', () => {
    // Generate random positions for left and top styles
    const leftPosition = Math.floor(Math.random() * 90) + 5; // Random left position between 5% and 95%
    const topPosition = Math.floor(Math.random() * 90) + 5; // Random top position between 5% and 95%
    
    // Apply the random positions to move the button
    noButton.style.left = `${leftPosition}%`;
    noButton.style.top = `${topPosition}%`;
});

const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('click', () => {
    // Show response
    response.textContent = "I love you, meri jaan";
});
