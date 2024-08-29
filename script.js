// Get references to the settings button and modal elements
const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.getElementById('closeModal');
const muteMusic = document.getElementById('muteMusic');
const muteSoundFx = document.getElementById('muteSoundFx');


// Toggle the display of the settings modal
function toggleSettingsModal() {
    if (settingsModal.style.display === "none" || settingsModal.style.display === "") {
        settingsModal.style.display = "block";
    } else {
        settingsModal.style.display = "none";
    }
}

// Event listeners for the Save and Settings buttons
document.getElementById('saveButton').addEventListener('click', function() {
    playClickSound();
    saveProgress();
});

document.getElementById('popupSaveButton').addEventListener('click', function() {
    playClickSound();
    saveProgress();
});

document.getElementById('settingsButton').addEventListener('click', function() {
    playClickSound();
    toggleSettingsModal();
});

// Event listener for the Restart Game button
document.getElementById('restartGameButton').addEventListener('click', function() {
    playClickSound();
    localStorage.clear(); // Clear all saved progress
    location.reload(); // Restart the game by reloading the page
});

// Event listener for the close button in the modal
closeModal.addEventListener('click', toggleSettingsModal);

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === settingsModal) {
        settingsModal.style.display = "none";
    }
});

// Toggle Mute Music
const muteMusicToggle = document.getElementById('muteMusicToggle');
muteMusicToggle.addEventListener('click', function() {
    const music = document.getElementById('backgroundMusic');
    if (muteMusicToggle.src.includes('on')) {
        muteMusicToggle.src = 'https://img.icons8.com/?size=100&id=BuDCu5ZpVkZC&format=png&color=000000';
        document.getElementById('musicStatus').innerText = "Music: Off";
        music.muted = true;
    } else {
        muteMusicToggle.src = 'https://img.icons8.com/?size=100&id=17778&format=png&color=000000';
        document.getElementById('musicStatus').innerText = "Music: On";
        music.muted = false;
    }
});

// Toggle Mute Sound Effects
const muteSoundFxToggle = document.getElementById('muteSoundFxToggle');
muteSoundFxToggle.addEventListener('click', function() {
    const sound = document.getElementById('clickSound');
    if (muteSoundFxToggle.src.includes('on')) {
        muteSoundFxToggle.src = 'https://img.icons8.com/?size=100&id=9976&format=png&color=000000';
        document.getElementById('soundFxStatus').innerText = "Sound Effects: Off";
        sound.muted = true;
    } else {
        muteSoundFxToggle.src = 'https://img.icons8.com/?size=100&id=41563&format=png&color=000000';
        document.getElementById('soundFxStatus').innerText = "Sound Effects: On";
        sound.muted = false;
    }
});

// Save progress logic (reuse previous saveProgress function)
document.getElementById('saveProgress').addEventListener('click', saveProgress);



// Function to play the click sound
function playClickSound() {
    const sound = document.getElementById('clickSound');
    sound.currentTime = 0; // Rewind to the start
    sound.play();
}
// Attach the event listener specifically to the "Begin" button on the landing page
document.getElementById('beginButton').addEventListener('click', function() {
    playClickSound();
    navigateTo('puzzle1'); // Assuming the button navigates to Puzzle 1
});
    
    // Function to navigate between pages
function navigateTo(page) {
    // Hide all pages by removing the 'active' class from each page element
    document.querySelectorAll('.page').forEach(function(pageElement) {
        pageElement.classList.remove('active'); // Removes the 'active' class
            playClickSound();
    });

    // Show the selected page by adding the 'active' class to the targeted page element
    document.getElementById(page + 'Page').classList.add('active');

    // If navigating to the home page, display all the main elements
    if (page === 'home') {
        document.getElementById('topBar').style.display = 'flex';
        document.getElementById('navBar').style.display = 'block';
    }

    // Update the title in the top bar to reflect the current page and its objective
    const pageTitle = {
        home: "Home",          // Display 'Home' when on the home page
        puzzle1: "Puzzle 1",   // Display 'Puzzle 1' when on the puzzle 1 page
        puzzle2: "Puzzle 2"    // Display 'Puzzle 2' when on the puzzle 2 page
    };
    
    // Update the page title text dynamically
    document.getElementById('pageTitle').innerText = `${pageTitle[page]} | Objective: [Placeholder Objective]`;
    
    // Example progress bar update logic
    if (page === 'puzzle1') {
        document.getElementById('progressBar').style.width = '50%'; // Set progress to 50% when on puzzle 1
    } else if (page === 'puzzle2') {
        document.getElementById('progressBar').style.width = '80%'; // Set progress to 80% when on puzzle 2
    } else {
        document.getElementById('progressBar').style.width = '30%'; // Default progress for other pages
    }
}

// Example of attaching the sound to all buttons and links
document.querySelectorAll('button, a').forEach(function(element) {
    element.addEventListener('click', playClickSound);
});

// Initial load to show the landing page by default when the app starts
document.addEventListener('DOMContentLoaded', function() {
    // Show the landing page and hide other elements initially
    navigateTo('landing');
    document.getElementById('topBar').style.display = 'none';
    document.getElementById('navBar').style.display = 'none';
});
