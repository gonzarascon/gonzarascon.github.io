$(document).ready(function() {
	// =================== WORK MODAL SETINGS
	let closeModal = $('.close-modal');
	let workModal = $('#work-modal');

	$('#work-slider').slick({
		dots: false,
	});

	closeModal.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		if(workModal.is(':visible')){
			workModal.fadeOut('300');
		}
	});

	// =================== MEDAL CASE SETTINGS
	let medalButton = $('#medal');
	let medalModal = $('#medal-container');
	let medalArrow = $('#close-medal');

	medalButton.on('click', function(event) {
		event.preventDefault();
		if (medalModal.is(':visible')) {
			medalModal.slideUp('300');
		} else{
			if(medalButton.hasClass('notification')){
				medalButton.removeClass('notification');
			}
			medalModal.slideDown('300').css('display', 'grid');
			game.updateBadges();
		}
	});

	medalArrow.on('click', function(event) {
		event.preventDefault();
		medalModal.slideUp('300');
	});

		// Tooltips for medals
		$('.tooltip').tooltipster({
			theme:['tooltipster-noir', 'tooltipster-noir-customized'],
			animation: 'grow'
		});

		// Tweak for Tooltipster Discovery
		$.tooltipster.on('start', function(event) {

    if ($(event.instance.elementOrigin()).hasClass('tooltip_group')) {

        var instances = $.tooltipster.instances('.tooltip_group'),
            open = false,
            duration;

        $.each(instances, function (i, instance) {

            if (instance !== event.instance) {

                // if another instance is already open
                if (instance.status().open){

                    open = true;

                    // get the current animationDuration
                    duration = instance.option('animationDuration');

                    // close the tooltip without animation
                    instance.option('animationDuration', 0);
                    instance.close();

                    // restore the animationDuration to its normal value
                    instance.option('animationDuration', duration);
                }
            }
        });

        // if another instance was open
        if (open) {

            duration = event.instance.option('animationDuration');

            // open the tooltip without animation
            event.instance.option('animationDuration', 0);
            event.instance.open();

            // restore the animationDuration to its normal value
            event.instance.option('animationDuration', duration);

            // now that we have opened the tooltip, the hover trigger must be stopped
            event.stop();
        }
	    }
			});
// ================ WORK SECTION SETTINGS
	let cardTitle = $('#work').find('.card-title');

	cardTitle.each(function(index, el) {
		let element = el;
		element.attr('data-opened', 'false');
	});

	cardTitle.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		if ($(this).attr('data-opened') == 'false') {
			$(this).attr('data-opened','true');
			game.checkedWorks();
		}
		game.checkContact();
	});
// ================ PROFILE SECTION SETTINGS
	let profile = $('#about');
	$(document).on('scroll', function(event) {
		event.preventDefault();
		if (isScrolledIntoView(profile)) {
			if(viewedProfile == false){game.checkProfile();}
			viewedProfile = true;
			game.updateBadges();
		}
	});
// ================ CONTACT SECTION SETTINGS

			let skipMedal = $('#skip-medal');
			let emailLocker = $('#emailLocker');
			let email = $('#email');

			skipMedal.on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				emailLocker.fadeOut('300', function() {
					email.fadeIn('300');
				});
			});

			email.on('click', function(event) {
				event.preventDefault();
				if (viewedContact == false) {
					game.checkContact();
				}
				viewedContact = true;
				game.updateBadges();
			});

// ============== SOCIAL MEDIA SECTION SETTINGS
			let socialMediaLinks = $('.social-media').find('a');

			socialMediaLinks.on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				if (viewedSm == false) {
					game.checkShare();
				}
				viewedSm = true;
				game.updateBadges();
			});

});

//For checking if the user has seen profile

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
