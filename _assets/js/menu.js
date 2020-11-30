$(document).ready(function(){
    $('.hamburger').click(function(){
      $('#header').toggleClass('open');
      $('body').toggleClass('no_scroll');
    });
  
    var win = $(window),
      nav = $('#header'),
  
      pos = nav.offset().top,
      sticky = function(){
        win.scrollTop() > pos ?
          nav.addClass('sticky')
        : nav.removeClass('sticky')
      }
  
  win.scroll(sticky)
  });