AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    cssEase: 'linear'
  });
});



