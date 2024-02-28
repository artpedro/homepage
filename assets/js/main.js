function fadein(elem) {
    elem.classList.replace('faded','fadein');
    }
function typeWriter(elementId, text, speed, i = 0) {
    // Ensure 'i' is initialized with a default value of 0 on the first call
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        i++;
        // Call the function again for the next character, after a delay
        setTimeout(function() {
            typeWriter(elementId, text, speed, i);
        }, speed);
    }
}

function toggleVisibility() {
var dropElement = document.getElementById('side-bar-mobile');
var isChecked = document.getElementById('toggle-menu').checked;
var screenWidth = window.innerWidth;

if (isChecked && screenWidth <= 700) {
    dropElement.style.display = 'block'; // Make sure the element is visible before dropping it
    requestAnimationFrame(() => {
    dropElement.style.top = '0'; // Drop down
    });
} else {
    dropElement.style.top = '-100%'; // Start moving it off-screen
    setTimeout(() => {
    dropElement.style.display = 'none'; // Hide after transition
    }, 500);
}
}

var date = new Date;
document.getElementById('date').innerHTML = "&copy; " + date.getFullYear() + " - Artur Pedro";
// Event listener for checkbox changes
document.getElementById('toggle-menu').addEventListener('change', toggleVisibility);
// Event listener for window resize
window.addEventListener('resize', toggleVisibility); 