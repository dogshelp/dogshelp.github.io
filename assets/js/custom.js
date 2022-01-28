$(() => {
	const offset = 200;
	const duration = 250;
	
  $(window).scroll(() => {
	  const topBarEl = $('.top-bar');
	  const backBtn = $('.back-to-top');
	  
	// Collapse the top bar on scroll
	if ($("#main-nav").offset().top > 60) {
		topBarEl.slideUp({
			duration: duration,
			easing: "easeInOutSine"
		}).fadeOut(120);
	} else {
		topBarEl.slideDown({
			duration: 0,
			easing: "easeInOutSine"
		}).fadeIn(120);
	}
	// Back Top Link
	if ($(this).scrollTop() > offset) {
		backBtn.fadeIn(400);
	} else {
		backBtn.fadeOut(400);
	}
  });
// hide navbar on click
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarResponsive');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() });
})
});

/* $(window).load(() => {
	// Page Preloader 	
	$("#preloader").fadeOut("slow");
});*/
