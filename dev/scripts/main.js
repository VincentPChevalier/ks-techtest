$(document).ready(function(){
	var scrollTop = 0;
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();

		
		if (scrollTop >= 200) {
			$('.scrolled-nav').removeClass('start-nav');
		} else if (scrollTop < 200) {
			$('.scrolled-nav').addClass('start-nav');
		} 
		
	}); 
	
});