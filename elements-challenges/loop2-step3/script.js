const buttons = document.querySelectorAll(".button");
const cardsContainer = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card");
var size = i = 0, j = 5;

buttons.forEach(b => b.addEventListener("click", () => {
    if (cardsContainer.offsetWidth < 350) {
        j = 7;
    } else if (cardsContainer.offsetWidth < 550) {
        j = 6;
    } else if (cardsContainer.offsetWidth < 800) {
        j = 5
    };
    
    if (b.classList.contains("right") === true) {
        if (i < j) {
            size += cards[i].offsetWidth + 20;
            cardsContainer.scrollTo(size, 0);
            i++;
        };
    } else {
        if (i > 0) {
            i--;
            size -= cards[i].offsetWidth + 20;
            cardsContainer.scrollTo(size, 0);
        };
    };

    if (i === 0 || i === j) {
        b.classList.add("hide");
    } else {
        buttons.forEach(b => b.classList.remove("hide"));
    };
}));