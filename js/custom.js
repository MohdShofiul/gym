$(function(){

    //banner-slider
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
      });

    // about-video
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    //testimonial-slider
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
    
    //counterUp
    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });

    //sponser-slider
    $('.sponser-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
      nextArrow: '<i class="fa fa-chevron-right nxt" aria-hidden="true"></i>',
    });
    
});