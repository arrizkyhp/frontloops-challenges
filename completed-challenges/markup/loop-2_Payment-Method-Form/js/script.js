const payment = document.querySelectorAll('.payment-method');


payment.forEach(e => {
    e.addEventListener('click', function() {
        removeClass();
        e.children[2].style.display = "block";
        e.classList.toggle("active");

    })
});

// remove active
const removeClass = () => {
    payment.forEach(e => {
        e.classList.remove('active');
         e.children[2].style.display = "none";
    })
}
