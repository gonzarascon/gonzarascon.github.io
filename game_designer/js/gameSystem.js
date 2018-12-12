let viewedWorks = 0;
let viewedAll = false;
let viewedProfile = false;
let viewedContact = false;
let viewedSm = false;

let game = {

	checkedWorks: function(){
		viewedWorks++;

		if(viewedWorks == 5 || viewedWorks == 1){game.badgeNotification();}

		game.checkContact();
	},
	checkProfile : function(){
		game.badgeNotification(); //Always call to badgeNotification() when a badge is aqquired
	},
	checkContact: function(){
		if(viewedWorks > 2 && $('#email').not(':visible')){

			$('#emailLocker').fadeOut('300', function() {
				$('.contact-lock').fadeOut('300');
				$('#skip-medal').fadeOut('300');
				$('#email').fadeIn('300');
			});
		}
		if ($('#email').is(':visible')) {
			game.badgeNotification();
		}
		return;
	},
	checkShare: function(){
		game.badgeNotification();
	},
	updateBadges: function(){
		if(viewedWorks <= 5){
			fiveSeen.set(viewedWorks*20);
		}
		if(viewedAll == true){
			allSeen.set(100);
		}
		if(viewedProfile == true){
			profileSeen.set(100);
		}
		if(viewedContact == true){
			chatted.set(100);
		}
		if(viewedSm == true){
			shared.set(100);
		}
	},
	badgeNotification: function(){
		//Notificación de medalla
		if(!$('.medal').hasClass('notification')){
			$('.medal').addClass('notification');
		}
	}
};
