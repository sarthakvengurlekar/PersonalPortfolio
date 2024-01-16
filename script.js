
document.getElementById('start-adventure').addEventListener('click', function() {
    document.getElementById('game-start-screen').classList.add('hidden');
    document.getElementById('character-sheet').classList.remove('hidden');
});

document.getElementById('view-portfolio').addEventListener('click', function() {
    document.getElementById('game-start-screen').classList.add('hidden');
    document.getElementById('quest-log').classList.remove('hidden');
});

// Additional interactive elements can be added here as needed
