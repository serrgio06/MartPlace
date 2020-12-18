$(function(){

  $('.slider__week').slick({
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>',
  });
  var mixer = mixitup('.new__products-inner');

  $('.followers__slider-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>',
  });

  $(".box__options-star").rateYo({
    rating: 4,
    starWidth: "12px",
    readOnly: true
  });

});