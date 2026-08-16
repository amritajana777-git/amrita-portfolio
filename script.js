const clicklogo = document.getElementById("logo");

clicklogo.addEventListener("click", function() {

    window.location.hash = "home";

});

const menuButton = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});