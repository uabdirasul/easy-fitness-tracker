var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4.5,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4.8
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is < 480px
    0: {
      slidesPerView: 1
    }
  }
});
