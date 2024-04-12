// script.js

const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

noButton.addEventListener('click', () => {
    // Calculate a random position between -2 and 2
    const newPosition = Math.floor(Math.random() * 5) - 2;
    
    // Move the button to the calculated position
    noButton.style.order = newPosition;
});

const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('click', () => {
    // Show response
    response.textContent = "I love you, meri jaan";
});
