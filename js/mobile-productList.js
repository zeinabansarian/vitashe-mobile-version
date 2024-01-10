var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
//   loop: true,
dalay:18000,

speed:800,

  controller: {
    control: swiperDetails,
  },
//   paginationClickable: true,
  spaceBetween: 0,
});

var swiperDetails = new Swiper(".swiperDetails", {
    slidesPerView:1,
    // loop: true
    speed:800,
    dalay:18000,
    controller: {
        control: swiperDetails,
      },
    paginationClickable: true,
    spaceBetween: 0,
    allowTouchMove : false,
    effect:'fade',
      fadeEffect: {
        crossFade: true
      },
});
swiper.controller.control = swiperDetails;
swiperDetails.controller.control = swiper;