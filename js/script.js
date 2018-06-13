$(document).ready(function() {
  console.log("hola");
  $('body').css({
      overflow: "hidden",
      height: "100vh"
  });
  var firstDrawing = anime({
    targets: '#lineDrawing .lines .path-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 750,
    complete: function(anim) {
      $('.path-2').attr('stroke', '#009BE8');
      var secondDrawing = anime({
        targets: '#lineDrawing .lines .path-2',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutCubic',
        duration: 300,
        complete: function(anim) {

          var thirdAnimation = anime({
            targets:'.intro-text',
            opacity: 1,
            easing: 'easeInOutCubic',
            duration:1000,
            complete: function(anim){
              window.setTimeout(
                function(e){
                  $('#lineDrawing').fadeOut();
                  $('body').css('overflow', 'auto');
                  $('body').css('height', 'auto');
                },
                2000
              );
            }


          });
          // $('.intro-text').animate({opacity:1},1000);
        }
      });

      // $('.intro-text').animate({opacity:1},1000);
    }
  });

  // var item_length = $('#slick-slider > div').length - 1;
  $('#slick-slider').slick({
    arrows:false,
    dots:false,
    autoplay:true,
    autoplaySpeed:1000,
    infinite : true,
    fade: true,
    cssEase: 'linear'
  });
});
