/* script.js */
document.getElementById("learnMore").addEventListener("click", function() {
    alert("Welcome to our vibrant world of web design!");
});

document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
});
