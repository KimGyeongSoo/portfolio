$(document).ready(function(){

//팝업 슬라이드
  var pop = new Swiper(".pop-1", {
    
    loop: true,
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    });

    var pop2 = new Swiper(".pop-2", {
    
      loop: true,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      });


  //팝업
  $(".modal").hide();
  $(".card1").click(function(){
    event.preventDefault()
    $(".pop1").show();
    $("html, body").addClass("no-scroll");
  });

  $(".close1").click(function(){
    $(".pop1").hide();
    $("html, body").removeClass("no-scroll");
    

  });
  
  $(".card2").click(function(){
    event.preventDefault()
    $(".pop2").show();
    $("html, body").addClass("no-scroll");
  });

  $(".close1").click(function(){
    $(".pop2").hide();
    $("html, body").removeClass("no-scroll");
  });

  $(".sns").click(function(){
    event.preventDefault()
    $(".pop3").show();
    $("html, body").addClass("no-scroll");
  });

  $(".close1").click(function(){
    $(".pop3").hide();
    $("html, body").removeClass("no-scroll");
  });

  $(".ban1").click(function(){
    event.preventDefault()
    $(".pop4").show();
    $("html, body").addClass("no-scroll");
  });

  $(".close1").click(function(){
    $(".pop4").hide();
    $("html, body").removeClass("no-scroll");
  });

  $(".ban2").click(function(){
    event.preventDefault()
    $(".pop5").show();
    $("html, body").addClass("no-scroll");
  });

  $(".close1").click(function(){
    $(".pop5").hide();
    $("html, body").removeClass("no-scroll");
  });

});