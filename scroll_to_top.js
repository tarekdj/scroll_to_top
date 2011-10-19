/**
 * Scroll to top behavior
 */
Drupal.behaviors.scroll_to_top = function (context) {
		// append  back to top link top body
		$("body").append("<p id='back-top'><a href='#top'><span></span><div id='link'>"+Drupal.t("Back to Top")+"</div></a></p>");
		// hide #back-top first
		$("#back-top").hide();
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
};

