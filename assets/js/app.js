
   $(document).ready(function(){
    var typed = new Typed('.typing', {
      strings: ["Frelencer","Designer"],
      typeSpeed:110,
      backSpeed:100,
      loop:true,
    });

    // Slick Slider
    $('.service-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots:true,
      prevArrow:false,
      nextArrow:false,
      autoplay:true,
      autoplaySpeed:2000,
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
      ]
    });
    // Magnific Popup
    $('.img-popup').magnificPopup({
      type:'image',
      gallery:{
        enabled:true
      }
    });
   })
   