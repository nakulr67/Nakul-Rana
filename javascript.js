// ===================for underline===================
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to change the active link based on scroll position
    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    // Change active link on scroll
    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);

    // Change active link on click
    navLinks.forEach((link, idx) => {
        link.addEventListener("click", function() {
            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");

            // Smooth scroll to section
            window.scrollTo({
                top: sections[idx].offsetTop,
                behavior: "smooth",
            });
        });
    });
});

// ====================for auti typ text============================
const texts = ["I'm a Frontend Developer", "I'm Nakul Rana", "Excited to work with you"]; // Array of texts to display
let currentText = 0;
let currentChar = 0;
const typewriterElement = document.getElementById("typewriter-text");

function typeText() {
    if (currentChar < texts[currentText].length) {
        typewriterElement.textContent += texts[currentText].charAt(currentChar);
        currentChar++;
        setTimeout(typeText, 100); 
    } else {
        setTimeout(() => {
            currentChar = 0;
            currentText = (currentText + 1) % texts.length; 
            typewriterElement.textContent = '';
            typeText();
        }, 2000); 
    }
}

typeText();
// ================navbar====================
// Select the button and the element you want to remove the class from
const button = document.getElementById('myButton');  // Button to trigger the action
const element = document.querySelector('.myElement');  // Element where the class is applied

// Add click event listener to the button
button.addEventListener('click', () => {
    // Check if the element has the class 'show'
    if (element.classList.contains('show')) {
        // Remove the class if it exists
        element.classList.remove('show');
        console.log('Class "show" removed!');
    } else {
        // Add the class if it doesn't exist
        element.classList.add('show');
        console.log('Class "show" added!');
    }
});




