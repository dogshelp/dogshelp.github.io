$(() => {
  $(window).scroll(() => {
					//Collapse the top bar on scroll
	  console.log('!!!!!', $("#main-nav").offset().top);
					/*if ($("#main-nav").offset().top > 60) {
						
						$('.top-bar').slideUp({
							duration: 250,
							easing: "easeInOutSine"
						}).fadeOut(120);
					} else {
						$('.top-bar').slideDown({
							duration: 0,
							easing: "easeInOutSine"
						}).fadeIn(120);
					}*/
				});

});
