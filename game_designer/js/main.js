let options= {
			strings: ['No son juegos,^1000', 'son experiencias.^1000'],
			typeSpeed:75,
			loop:true,
			backSpeed:50
		}

let typed = new Typed('#titles', options);


$(document).ready(function() {

	// =================== MEDAL CASE SETTINGS
	let medalButton = $('#medal');
	let medalModal = $('#medal-container');
	let medalArrow = $('#close-medal');

	medalButton.on('click', function(event) {
		event.preventDefault();
		if (medalModal.is(':visible')) {
			medalModal.slideUp('300');
		} else{
			medalModal.slideDown('300').css('display', 'grid');
		}
	});

	medalArrow.on('click', function(event) {
		event.preventDefault();
		medalModal.slideUp('300');
	});



});
