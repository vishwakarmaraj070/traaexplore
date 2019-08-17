$(document).ready(function () {

  // preloader
  $(".preloader").delay(500).fadeOut();

  // pagepiling here
  $(document).ready(function () {
    $('#pagepiling').pagepiling({
      anchors: ['home', 'about', 'mice', 'travel', 'event', 'tourism', 'dw', 'portfolio', 'contact', 'lastPage'],
      menu: '#myMenu',
      direction: 'vertical',
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: true,
      loopTop: true,
      sectionSelector: 'section',
      animateAnchor: true
    });
  });

  // popovers Initialization
  $("[data-toggle=popover]").each(function (i, obj) {
    $(this).popover({
      html: true,
      content: function () {
        var id = $(this).attr('id');
        return $('#popover-content-' + id).html();
      }
    });

  });


  var deviceWidth = $(document).width();

  // click set of card
  $('.m-click').click(function () {
    if(deviceWidth > 575){
      $('#m-click').addClass('card-click-open');
    }else{
      setTimeout(function(){
        $('#m-click').addClass('card-click-open');
      }, 1000);
    }
  });
  $('.i-click').click(function () {
    if(deviceWidth > 575){
      $('#i-click').addClass('card-click-open');
    }else{
      setTimeout(function(){
        $('#i-click').addClass('card-click-open');
      }, 1000);
    }
  });
  $('.c-click').click(function () {
    if(deviceWidth > 575){
      $('#c-click').addClass('card-click-open');
    }else{
      setTimeout(function(){
        $('#c-click').addClass('card-click-open');
      }, 1000);
    }  });
  $('.e-click').click(function () {
    if(deviceWidth > 575){
      $('#e-click').addClass('card-click-open');
    }else{
      setTimeout(function(){
        $('#e-click').addClass('card-click-open');
      }, 1000);
    }  });



  // toggle click
  $('.navbar.scrolling-navbar button.navbar-toggler').click(function(){
    $(this).toggleClass('toggle-click');
    $('span.toggle-bar.bar-1').toggleClass('bar-1-click');
    $('span.toggle-bar.bar-2').toggleClass('bar-2-click');
    $('span.toggle-bar.bar-3').toggleClass('bar-3-click');
  });

  // read more setup
  $('.read-more').click(function(){
    $(this).toggleClass('read-more-open');
  });

  // travel setup
  $('.travel-btn').click(function(){
    $('.travels').addClass('w-576-open')
  });
  $('.travels-container-close').click(function(){
    $('.travels').removeClass('w-576-open')
  });

   // creative setup
   $('.creative-btn').click(function(){
    $('.creatives').addClass('w-576-open')
  });
  $('.creatives-container-close').click(function(){
    $('.creatives').removeClass('w-576-open')
  });

  // events click
  $('.event-btn').click(function(){
    setTimeout(function(){
      $('.w-event-container').addClass('w-576-open');
    },500);
  });

  $('.event-container-close').click(function(){
    $('.w-event-container').removeClass('w-576-open');
  });


  //travel here

  $('.travel-sec p').click(function(e){
    var title = $(e.target).text();
    $('.travel-modal').addClass('open');

    $('.travel-modal *').addClass('fade-Out');
    
    setTimeout(() => {
      $('.travel-modal *').removeClass('fade-Out');
      $('.travel-title').html(title);
    }, 500)
  });

  $('.creative-sec p').click(function(e){
    var title = $(e.target).text();
    $('.creative-modal').addClass('open');

    $('.creative-modal *').addClass('fade-Out');
    
    setTimeout(() => {
      $('.creative-modal *').removeClass('fade-Out');
      $('.creative-title').html(title);
    }, 500)
  });

  $('.travel-close').click(function(){
    $('.modal-container').removeClass('open');
  })

  //event here
    var zindex = 10;
    $("#events .event-container div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("#events .event-container div.cards").hasClass("showing")) {
        // a card is already in view
        $("#events .event-container div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("#events .event-container div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("#events .event-container div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });

});