$(document).ready(function() {
  $('#gallery_slider').owlCarousel({
    dots: false,
    items: 6,
    loop:true,
    margin:30,
    center: true,
    startPosition: 4,
    stagePadding: 0,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    freeDrag: true,
    nav: true,
    navText: ["<img src='img/Прямоугольник36.svg'>","<img src='img/Прямоугольник36.svg'>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6
      }
    },
  });

  $('#gallery_slider').on('changed.owl.carousel', function(e) {
    if (!e.namespace || e.property.name != 'position') return
    /*$('#info').text((e.relatedTarget.relative(e.item.index) + 1) + ' ' +  del.text() + '  ' + e.item.count)*/
    $('#num-slide').text((e.relatedTarget.relative(e.item.index) + 1) + '  ');
    $('#quantity-slide').text(' ' + e.item.count);
  });

  $('#slider-coment').owlCarousel({
    dots: true,
    margin:10,
    nav:true,
    startPosition: 2,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    freeDrag: true,
    center: true,
    items: 1,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
  });

  $('#partners-slider').owlCarousel({
    dots: false,
    margin:0,
    nav:true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    freeDrag: true,
    loop: true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
      items:1,
      nav:true
      },
      600:{
      items:3,
      nav:false
      },
      1000:{
      items:5,
      nav:true,
      }
    }
  });

  $(window).scroll(function(){
    /*var w = $(window).width();
    var h = $(window).height();*/
    var st = $(this).scrollTop();

 /*   $(".banner-name").css({
      "transform" : "translate(0%, " + st*0.9 + "%" 
    });*/

   $(".granola").css({
      "transform" : "translate(0%, " + st*0.1 + "%" 
    });

   $("#coffebean_1").css({
      "transform" : "translate(0%, " + st*0.175 + "%" 
    });

   $("#coffebean_2").css({
      "transform" : "translate(0%, " + st*0.3 + "%" 
    });

    $("#coffebean_3").css({
      "transform" : "translate(0%, " + st*0.1 + "%" 
    });

   $("#coffebean_4").css({
      "transform" : "translate(0%, " + st*0.1 + "%" 
    });

    $("#coffebean_5").css({
      "transform" : "translate(0%, " + st*0.02 + "%" 
    });

    $("#coffebean_6").css({
      "transform" : "translate(0%, " + st*0.1 + "%" 
    });
  });

  new WOW().init();
});
s