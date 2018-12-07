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

});
