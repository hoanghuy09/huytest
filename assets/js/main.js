 /*
|--------------------------------------------------------------------------
| Custom JS
|--------------------------------------------------------------------------
|
| About author: https://Sticky.vn/
|
*/

  /* ------------------------------------------------------------------------ *  
      Sticky header when scroll
  * ------------------------------------------------------------------------ */
  // jQuery(document).ready(function () {
  //   $(window).scroll(function(){
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 62) {
  //       $(".header").addClass("sticky");
  //     }
  //     else {
  //       $(".header").removeClass("sticky");
  //     }
  //   });
  // });

  /* ------------------------------------------------------------------------ *  
      jQuery inview
  * ------------------------------------------------------------------------ */
  // ('div').on('inview', function(event, isInView) {
  //   if (isInView) {
  //   } else {
  //   }
  // });


//   POPULAR
  jQuery(document).ready(function(){
    $('.popular-product-carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


    $('.stratery-box-mobile').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

     
    $(".title-footer").click(function(){
      $(".footer-mobile").slideToggle();
    });

    $('.toggle-btn').click(function(){
      $('.header-menu-mobile').addClass('show');
    });

    $('.btn-close').click(function(){
        $('.header-menu-mobile').removeClass('show');
    });

    $('.carousel-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
});
    
