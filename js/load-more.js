$( document ).ready(function () {
  $(".moreBox").slice(0, 2).show();
    if ($(".moreBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 1).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});