let body = document.querySelector('body');
let intro = document.querySelector(".intro");
body.addEventListener("touchstart", () => {
  gsap.to(".intro",{
    y:'-150%',
    duration:2.1,
    delay:1,
  })
  gsap.to(".introTitle", {
    opacity: 0,
    delay: 0,
    duration:1,
    y:-50,
  });
});

$(".intro")
  .imagesLoaded()
  .done(function (instance) {
    gsap.to(".introTitle", {
      opacity: 1,
      delay: 0,
      duration:1.5,
      y:0,
    });
  });


//   SWIPER
var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 2,
    delay: 0,
    centeredSlides: true,
    spaceBetween: 150,
    speed: 1500,
    mousewheel: false,
  });
