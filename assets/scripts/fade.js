const appear3 = document.querySelector('.appear3');
const cb3 = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
            entry.unobserve(entry.target)
        }
    });
}
const io3 = new IntersectionObserver(cb3);
io3.observe(appear3);

const mainArt = document.querySelector('.main-article');

const scrollToAbout = () => {
    mainArt.scrollIntoView({behavior: "smooth", block: "start"});
}
