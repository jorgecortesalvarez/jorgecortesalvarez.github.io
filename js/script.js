$(document).ready(function() {

    var cont = $('.main_content .principal_content');
    var contOffset = cont.offset();

    // scroll function
    function scrollToID(id, speed){
        var targetOffset = $(id).offset().top - contOffset.top + cont.scrollTop();
        cont.animate({scrollTop: targetOffset}, speed);
    }

    $('.scroll-to').on('click', function(event){
      event.preventDefault();
      var sectionID = $(this).attr("data-id");
      scrollToID('#' + sectionID, 750);
    });

    //anchor active function
    /*
    $('.active').on('click', function(){
      $('.active').removeClass('active_navigation');
      $(this).addClass('active_navigation');
    });*/

});
