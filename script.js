window.onload = function() {
    document.getElementById('character-sheet').classList.add('hidden');
    document.getElementById('quest-log').classList.add('hidden');
    document.getElementById('contact-tavern').classList.add('hidden');
};

document.getElementById('start-adventure').addEventListener('click', function() {
    document.getElementById('game-start-screen').classList.add('hidden');
    document.getElementById('character-sheet').classList.remove('hidden');
});

document.getElementById('view-portfolio').addEventListener('click', function() {
    document.getElementById('game-start-screen').classList.add('hidden');
    document.getElementById('quest-log').classList.remove('hidden');
});

// Function to show the start screen and hide all other sections
function showStartScreen() {
    document.getElementById('game-start-screen').classList.remove('hidden');
    document.getElementById('character-sheet').classList.add('hidden');
    document.getElementById('quest-log').classList.add('hidden');
    document.getElementById('contact-tavern').classList.add('hidden');
}

// Attach this function to all back buttons
const backButtons = document.getElementsByClassName('back-button');
for (let i = 0; i < backButtons.length; i++) {
    backButtons[i].addEventListener('click', showStartScreen);
}

