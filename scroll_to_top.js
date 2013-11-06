/**
 * Scroll to top behavior
 */
Drupal.behaviors.scroll_to_top = function (context) {
  // append  back to top link top body
  if (context == document) {
    $(window).scroll(function () {
	  if ($(this).scrollTop() > 100) {
	    $('#back-top').fadeIn();
	  } else {
	    $('#back-top').fadeOut();
	  }
    });		
  }
  var exist= $('#back-top').length; // exist = 0 if element doesn't exist
  if(exist == 0){ // this test is for fixing the ajax bug 
	$("body", context).append("<div id='back-top'><a href='#top'><span class='icon'></span><span id='link'>"+Drupal.t("Back to Top")+"</div></a></span>");
  }
  // hide #back-top first
  $("#back-top",context).hide();
  // scroll body to 0px on click
  $('#back-top a', context).click(function () {
	$('body,html').animate({
	  scrollTop: 0
	}, 800);
	return false;
  }); 
};
