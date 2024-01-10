const loadLeft = document.querySelectorAll('.loadLeft');
loadLeft.forEach((element) => {
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
    .fromTo(element, 0.7, { autoAlpha: 0, x: "-15vw" }, { autoAlpha: 1, x: 0 });
});

const loadRight = document.querySelectorAll('.loadRight');
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
    .fromTo(element, 0.7, { autoAlpha: 0, x: "15vw" }, { autoAlpha: 1, x: 0 });
});


