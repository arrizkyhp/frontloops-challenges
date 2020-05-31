const slider = document.getElementById("slider"), sliderValue = document.querySelector(".value");

sliderValue.textContent = slider.value;
slider.style.cssText = "background-image: linear-gradient(90deg, #738082 " + slider.value + "%, #F1F1F1 " + slider.value + "%);";

slider.addEventListener("input", function() {
    sliderValue.textContent = this.value;
    slider.style.cssText = "background-image: linear-gradient(90deg, #738082 " + this.value + "%, #F1F1F1 " + this.value + "%);";
});