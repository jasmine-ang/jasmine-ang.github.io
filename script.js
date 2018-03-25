$(document).ready(function() {
  //Implement the "slide to left" when the user clicks on #carousel-next here
  $('#carousel-next').click(function() {
    var curr = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (curr == -3840) {
      return false;
    } else {
      $('#carousel').css({'margin-left': curr -= 960})
    }
  });

//   //Implement the "slide to right" when the user clicks on #carousel-prev here

  $('#carousel-prev').click(function() { 
    var curr = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (curr == 0) {
      return false;
    } else {
      $('#carousel').css({'margin-left': curr += 960})
    }
  });
});
