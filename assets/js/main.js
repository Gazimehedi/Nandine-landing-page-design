$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

     //magific popup
     $('#videopopup').magnificPopup({
        type: 'iframe',
        // other options
        iframe: {
          
            patterns: {
              youtube: {
                index: 'youtube.com/', 
          
                id: 'v=', 
          
                src: 'https://www.youtube.com/embed/21XB5Fl11q8' 
              }
          
            },
          
            srcAction: 'iframe_src', 
          }

      });
          
      $('.skillbar').skillBars({
        // options here
      });

      $('.count').counterUp({
        delay: 10,
        time: 1000
    });  
    //Mixitup for portfollio section
  var mixer = mixitup(".contain");
  //Image popup
  $('.popup-img').magnificPopup({type:'image'});
  //owl cursel for team
  $('.owl-carousel-team').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
//testamonial
$('.owl-carousel-tastamonial').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

}(jQuery));