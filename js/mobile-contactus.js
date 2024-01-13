
const loadRight = document.querySelectorAll('.contact-us p');
loadRight.forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "center 20%",
        ease: "none",
        toggleActions: "play none none none"
      }
    })
    .fromTo(element, 0.7, { autoAlpha: 0,opacity : 0, y: "50px" }, { autoAlpha: 1,opacity : 1, y: 0 });
});
const loada = document.querySelectorAll('.contact-us a');
loada.forEach((element) => {
    console.log(element);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "center 20%",
        ease: "none",
        toggleActions: "play none none none"
      }
    })
    .fromTo(element, 0.7, { autoAlpha: 0,opacity : 0, y: "50px" }, { autoAlpha: 1,opacity : 1, y: 0 });
});


const loadTel = document.querySelectorAll('.contact-us a span');
loadTel.forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "center 20%",
        ease: "none",
        toggleActions: "play none none none"
      }
    })
    .fromTo(element, 0.7, { autoAlpha: 0,opacity : 0, y: "50px" }, { autoAlpha: 1,opacity : 1, y: 0 });
});
const loadLabel = document.querySelectorAll('.contact-us label');
loadLabel.forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "center 20%",
        ease: "none",
        toggleActions: "play none none none"
      }
    })
    .fromTo(element, 0.7, { autoAlpha: 0,opacity : 0, y: "50px" }, { autoAlpha: 1,opacity : 1, y: 0 });
});

const loadInput = document.querySelectorAll('.contact-us input');
loadInput.forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "center 20%",
        ease: "none",
        toggleActions: "play none none none"
      }
    })
    .fromTo(element, 0.7, { autoAlpha: 0,width : 0 }, { autoAlpha: 1,width : "100%" });
});

const loadTextArea = document.querySelectorAll('.contact-us textarea');
loadTextArea.forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "center 20%",
        ease: "none",
        toggleActions: "play none none none"
      }
    })
    .fromTo(element, 0.7, { autoAlpha: 0,width : 0 }, { autoAlpha: 1,width : "100%" });
});






var tl = gsap.timeline(),
  mySplitText = new SplitType(".contactDetail h1", { type: "words,chars" }),
  chars = mySplitText.chars; 

gsap.set(".contactDetail h1", { perspective: 400 });


tl.from(chars, {
  duration: 0.5,
  opacity: 0,
  y: 80,

  stagger: 0.05
});


