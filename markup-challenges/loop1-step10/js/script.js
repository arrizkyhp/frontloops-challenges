const toggleMenu = document.querySelectorAll(".will-toggle");
const sideMenu = document.querySelectorAll(".menu");

toggleMenu.forEach(e => e.addEventListener("click", () => {
    toggleMenu[0].classList.toggle("fadeZindex");
    sideMenu.forEach(e => e.classList.toggle("show"));
}));