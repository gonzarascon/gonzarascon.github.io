$(document).ready(function() {

	let phrasesForTyping = ["Experiencias","Oportunidades", "Identidad"];
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
});
