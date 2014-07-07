jQuery(function($) {

  $('ul.tabs').on('click', 'a', function(event) {

    event.preventDefault();

    var $button = $(event.target),
        $li     = $button.parent(),
        $target = $($button.attr('href'));

    $li
      .addClass('active')
        .siblings()
          .removeClass('active');

    $target
      .addClass('active')
        .siblings()
          .removeClass('active');

  });

});
