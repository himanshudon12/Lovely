const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

noButton.addEventListener('click', () => {
    // Change position of "No" button
    noButton.style.order = -1;
});

const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('click', () => {
    // Show response
    response.textContent = "I love you, meri jaan";
});
