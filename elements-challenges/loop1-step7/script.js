// Using Intersection Observer API to detect when the elements are on the screen

const ratio = .4;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
};

const revealElement = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
        };
    })
};
  
const observer = new IntersectionObserver(revealElement, options);

document.querySelectorAll(".content").forEach(function (r) {
    observer.observe(r);
});

