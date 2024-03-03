const noButton = document.getElementById('noBtn');

// Function to move the "No" button to a random position
function moveButton() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}

// Add event listener to move the button when clicked
noButton.addEventListener('click', moveButton);

const yesButton = document.getElementById('yesBtn');
const congratulationsMessage = document.getElementById('congratulations');

// Function to show the congratulations message
function showCongratulations() {
    congratulationsMessage.classList.remove('hidden');
}

// Event listener for the "Yes" button
yesButton.addEventListener('click', function() {
    showCongratulations();
});
