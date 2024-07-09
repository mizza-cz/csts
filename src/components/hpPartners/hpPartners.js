$(".hpPartners__inner").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1238,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  ],
});
