document.addEventListener("DOMContentLoaded", function() {
    let year = new Date().getFullYear();
    document.querySelector("footer p").innerHTML = `&copy; ${year} Alfred | Hackathon Project`;
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
