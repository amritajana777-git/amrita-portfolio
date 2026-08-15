const clicklogo = document.getElementById("logo");

clicklogo.addEventListener("click", function() {

    window.location.hash = "home";

});

const menuButton = document.querySelector("#menu-btn");

const navLinks = document.querySelector(".nav-links");

let menuOpen = false;

menuButton.addEventListener("click", function() {

    menuOpen = !menuOpen;

});