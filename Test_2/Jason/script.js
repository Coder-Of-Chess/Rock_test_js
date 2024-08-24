let noClickCount = 0; // Counter for "No" button clicks
let dogClickCount = 0; // Counter for dog image clicks

document.getElementById('yes-btn').addEventListener('click', () => {
    document.getElementById('gift-card').classList.remove('hidden');
});

document.getElementById('no-btn').addEventListener('click', () => {
    noClickCount++;

    if (noClickCount == 8) {
        alert('Hacking Computer now!');
    } else if (noClickCount == 5) {
        alert('Are you serious, bro?');
    } else {
        const button = document.getElementById('no-btn');
        const buttonWidth = button.clientWidth;
        const buttonHeight = button.clientHeight;

        const x = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - buttonHeight));

        button.style.position = 'fixed';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }
});

document.getElementById('dog').addEventListener('click', () => {
    dogClickCount++;

    if (dogClickCount == 5) {
        document.getElementById('dog').style.display = 'none';
    } else {
        const dog = document.getElementById('dog');
        const currentWidth = dog.clientWidth;
        const currentHeight = dog.clientHeight;

        dog.style.width = `${currentWidth * 0.8}px`;
        dog.style.height = `${currentHeight * 0.8}px`;
    }
});