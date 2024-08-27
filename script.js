// Function to navigate between pages
function navigateTo(page) {
    // Hide all pages by removing the 'active' class from each page element
    document.querySelectorAll('.page').forEach(function(pageElement) {
        pageElement.classList.remove('active'); // Removes the 'active' class
    });

    // Show the selected page by adding the 'active' class to the targeted page element
    document.getElementById(page + 'Page').classList.add('active');

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

// Initial load to show the home page by default when the app starts
navigateTo('home');
