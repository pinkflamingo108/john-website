var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination

  pagination: {
    el: ".swiper-pagination",
  },

  //Flip effect

  //   effect: "flip",
  //   grabCursor: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
