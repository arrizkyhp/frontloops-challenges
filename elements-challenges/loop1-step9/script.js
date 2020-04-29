const stickyElement = document.querySelector(".sticky-element");

const stickyPos = stickyElement.offsetTop - 30;

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= stickyPos) {
        stickyElement.classList.add("sticky");
    } else {
        stickyElement.classList.remove("sticky");
    };
});