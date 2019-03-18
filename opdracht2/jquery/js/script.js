$(function(){
  $(".knopje").click(function(){
    $("p").slideUp(2000);
  });
$(".knopjee").click(function(){
    $("p").slideDown();
  });
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
