import $ from 'jquery';

export default () => {
  const $window = $(window);

  function smoothScroll() {
    $('a[data-target]').click(function clickTarget(e) {
      const href = $(this).attr('data-target');
      const $container = $('.sg-main');

      $container.stop().animate({
        scrollTop: $container.scrollTop() + ($(href).offset().top - $container.offset().top)
      }, 600, () => {
        window.location.hash = href;
      });

      e.preventDefault();
    });
  }

  $window.on('resize', smoothScroll);
  $window.trigger('resize');
};
