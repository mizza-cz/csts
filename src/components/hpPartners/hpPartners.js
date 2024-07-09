$(".hpPartners__inner").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
