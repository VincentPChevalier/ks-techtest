$(document).ready(function(){
	var scrollTop = 0;
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();

		
		if (scrollTop >= 800) {
			$('.scrolled-nav').removeClass('start-nav');
		} else if (scrollTop < 800) {
			$('.scrolled-nav').addClass('start-nav');
		} 
		
	}); 

	window.sr = ScrollReveal({ duration: 2000 });
	sr.reveal('.products');
	sr.reveal('.rows');
	
});