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
	let menuButton = $('#open-menu');
	let faIcon = menuButton.find('#menu-icon');
	let mainNav = $('.main-nav');
	$('#open-menu').click(function(event) {

		if(menuButton.attr('data-menustate') == 'open') {
			mainNav.slideUp();
			menuButton.attr('data-menustate', 'closed');
			faIcon.removeClass('fa-times');
			faIcon.addClass('fa-bars');

		} else{
			mainNav.slideDown();
			menuButton.attr('data-menustate', 'open');
			faIcon.removeClass('fa-bars');
			faIcon.addClass('fa-times');
		}
	});

	$('.menu-item').click(function(event) {
		if (mobileIconVisible()) {

			if (mainNav.is(':visible')) {
					mainNav.slideUp();
					faIcon.removeClass('fa-times');
					faIcon.addClass('fa-bars');
			} else {

			}

		} else{
			console.log("Estas en desktop");
		}
	});

	function mobileIconVisible(){
		if (faIcon.is(':visible')) {
			return true;
		} else {
			return false;
		}
	}

});
