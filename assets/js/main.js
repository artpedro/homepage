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