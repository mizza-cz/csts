$(".hpSlider__inner").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button class="hpSlider__btn hpSlider__btnprev"><img src="images/ico/arrow-left.svg" loading="lazy" alt="" /></button> ',
  nextArrow:
    ' <button class="hpSlider__btn  hpSlider__btnnext"><img src="images/ico/arrow-left.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1238,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
