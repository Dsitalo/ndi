// hover in menu
window.onload = function () {
  $('#arr').hover(function () {
    $('#darkness').fadeTo(300, 1);
  }, function () {
    $('#darkness').fadeTo(300, 0, function () {
      $(this).hide();
    });
  });
  $(".knop").click(function () {
    $(this).next(".dropdown-menu").toggleClass("drop");
  })
  $(".knop1").click(function () {
    $(this).siblings(".dropdown-menu1").toggleClass("drop");
  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
}
