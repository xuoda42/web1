$(document).ready(function(){
    $('.slider').slick({
      arrows: true,
      dots:true,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll:4,
      speed:1000,
      easing:'ease',
      draggable:false,
      waitForAnimate:true,
      responsive:[
        {
          breakpoint:760,
          settings:{
            slidesToShow:2,
            slidesToScroll:2,
          }
        }
      ]
    });
  });