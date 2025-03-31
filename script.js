// Get the menu icon element
var menuIcon = document.getElementById('menu-icon');

// Get the navigation links container
var navLinks = document.querySelector('.nav-links');

// Add an event listener to the menu icon to toggle the navigation links
menuIcon.addEventListener('click', function() {
    // Toggle between showing and hiding the navigation menu
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';  // Hide the menu
    } else {
        navLinks.style.display = 'flex';  // Show the menu
        navLinks.style.flexDirection = 'column';  // Stack the menu links vertically for mobile
    }
});

// Get the modal
var modal = document.getElementById("successModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the registration form
var form = document.getElementById("registrationForm");

// When the user submits the form, show the modal
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Display the modal
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
