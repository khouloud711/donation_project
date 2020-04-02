    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    confer_window.on('load', function () {
      $('#preloader').fadeOut('1000', function () {
          $(this).remove();
      });
  });
