var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
//   loop: true,
  controller: {
    control: swiperDetails,
  },
//   paginationClickable: true,
  spaceBetween: 0,
});

var swiperDetails = new Swiper(".swiperDetails", {
    slidesPerView:1,
    // loop: true
    controller: {
        control: swiper,
      },
    paginationClickable: true,
    spaceBetween: 0,
});
swiper.controller.control = swiperDetails;
swiperDetails.controller.control = swiper;