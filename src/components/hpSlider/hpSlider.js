$(".hpSlider__inner").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button class="hpSlider__btn hpSlider__btnprev"><img src="images/ico/arrow-left.svg" loading="lazy" alt="" /></button> ',
  nextArrow:
    ' <button class="hpSlider__btn  hpSlider__btnnext"><img src="images/ico/arrow-left.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
