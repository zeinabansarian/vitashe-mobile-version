var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  loop: true,
  paginationClickable: true,
  spaceBetween: 0,
});

var swiperDetails = new Swiper(".swiperDetails", {
  slidesPerView: 1,
  centeredSlides: true,

  loop: true,
  spaceBetween: 0
});
swiper.controller.control = swiperDetails;
swiperDetails.controller.control = swiper;