$(document).ready(function() {

	let phrasesForTyping = ["Experiencias","Oportunidades", "Identidad","E-commerce","Sitios asombrosos"];
	let mainTyping = new Typed ('.writer',{
		strings:phrasesForTyping,
		typeSpeed: 70,
		loop:true,
		startDelay:150
	});

	$('#change').click(function(event) {
		let el = $('#pop');
		let gradient = $("#pop_1_");
		gradient.find('stop').css('stop-color', 'rgba(0,0,0,0)');
		el.css('stroke','#642D91');
	});

	//Start Animate on Scroll lib
	AOS.init();


	// Open menu on mobile
	$('#open-menu').click(function(event) {
		let menuButton = $(this);
		let faIcon = menuButton.find('#menu-icon');
		let mainNav = $('.main-nav');

		if(menuButton.attr('data-menustate') == 'open') {
			mainNav.slideUp();
			menuButton.attr('data-menustate', 'closed');
		} else{
			mainNav.slideDown();
			menuButton.attr('data-menustate', 'open');
		}
	});
});
