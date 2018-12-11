let viewedWorks = 0;
let game = {

	checkedWorks: function(){
		viewedWorks++;
		if(viewedWorks <= 5){
			fiveSeen.set(viewedWorks*20);
		}

		if(viewedWorks == 5){game.badgeNotification();}

		allSeen.set(viewedWorks*10);
		game.checkContact();
	},
	checkProfile : function(){
		profileSeen.set(100);
		game.badgeNotification(); //Always call to badgeNotification() when a badge is aqquired
	},
	checkContact: function(){
		if(viewedWorks > 5 && $('#email').not(':visible')){
			$('#emailLocker').fadeOut('300', function() {
				$('#email').fadeIn('300');
			});
		}
		if ($('#email').is(':visible')) {
			chatted.set(100);
			game.badgeNotification();
		}
		return;
	},
	checkShare: function(){
		shared.set(100);
		game.badgeNotification();
	},
	badgeNotification: function(){
		//Notificación de medalla
		if(!$('.medal').hasClass('notification')){
			$('.medal').addClass('notification');
		}
	}
};
