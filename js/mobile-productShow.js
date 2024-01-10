let para = document.querySelectorAll(".section6 .innerTxt p");
let rSec = document.querySelector(".section6 .innerTxt")

para.forEach(p => {
    if (p.innerText.length < 5) {

        rSec.removeChild(p);
    }
});

var lightbox = new SimpleLightbox('.lightboxImg', { 
    uniqueImages : false,
    showCounter : false,
    navText : ['←','→']
 });
