// script.js

const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

noButton.addEventListener('click', () => {
    // Calculate the current position of the "No" button
    const currentPosition = window.getComputedStyle(noButton).order;
    const newPosition = currentPosition === '0' ? '-1' : '0';
    
    // Update the order property to move the button
    noButton.style.order = newPosition;
});

const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('click', () => {
    // Show response
    response.textContent = "I love you, meri jaan";
});
