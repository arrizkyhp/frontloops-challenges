const buttons = document.querySelectorAll(".btn");
const showClass = document.querySelectorAll(".hide");
const title = document.querySelector(".content-text");

buttons.forEach(btn => btn.addEventListener("click", () => {
    let attr = btn.getAttribute("data-btn-type");
    switch (attr) {
        case "search" :
            title.innerHTML = "Whoa! You found me!";
            buttons[3].innerHTML = "Hide back";
            showClass.forEach(element => element.classList.add("show"));
            break;
        case "run" :
            title.innerHTML = "Please don't run!";
            buttons[3].innerHTML = "Close";
            showClass.forEach(element => element.classList.add("show"));
            break;
        case "hide" :
            showClass.forEach(e => e.classList.remove("show"));
            break;
    }
}));