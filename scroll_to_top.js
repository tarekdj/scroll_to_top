(function($){
/**
 * Toggle the visibility of the scroll to top link.
 */
 
Drupal.behaviors.scroll_to_top = {
  attach: function (context, settings) {
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	}
};
})(jQuery);
