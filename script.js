function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(function(pageElement) {
        pageElement.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(page + 'Page').classList.add('active');
}

// Navigation on initial load
document.getElementById('homePage').classList.add('active');

// Check Puzzle Answers
function checkAnswer(puzzle) {
    let userAnswer = document.getElementById(puzzle + 'Answer').value.trim().toLowerCase();
    let feedback = document.getElementById(puzzle + 'Feedback');
    
    if (puzzle === 'puzzle1' && userAnswer === 'light') {
        feedback.innerText = "Correct! Proceed to Puzzle 2.";
        feedback.style.color = 'green';
        setTimeout(function() {
            navigateTo('puzzle2');
        }, 2000);
    } else if (puzzle === 'puzzle2' && userAnswer === 'north') {
        feedback.innerText = "Correct! You've solved the final puzzle!";
        feedback.style.color = 'green';
    } else {
        feedback.innerText = "Incorrect. Please try again.";
        feedback.style.color = 'red';
    }
}
