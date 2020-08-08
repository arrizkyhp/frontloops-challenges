const btn = document.querySelector(".load-btn"), ctn = document.querySelector(".cards-container");

var p = 1, heightAdd = 0;

function animation() {
    setTimeout(() => {
        ctn.style.height = `${heightAdd / 2}px`;
    }, 1);
}

function createCard(name) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = name;
    ctn.appendChild(card);
    heightAdd += card.offsetHeight + 17;
}

function loadCards() {
    document.body.classList.add("progress");
    btn.classList.add("progress");
    btn.disabled = true;
    fetch("https://swapi.dev/api/people/?page=" + p)
    .then(response => response.json())
    .then(data => {
        try {
            for (let i = 0; i < 10; i++) {
                createCard(data.results[i].name);
            }
            animation();
            p++;
            btn.disabled = false;
        } catch (error) {
            animation();
            btn.disabled = true;
        }
        document.body.classList.remove("progress");
        btn.classList.remove("progress");
    })
}

btn.addEventListener("click", () => {
    loadCards();
})