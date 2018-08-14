$(document).ready(function() {
	let modal = $('.modal-grid');
	let firstModalFigure = $('.modal-image-1');
	let secModalFigure = $('.modal-image-2');
	let modalTitle = $('.modal-heading');
	let modalText = $('.modal-text');

	let firstImages = ["porton","arquitectura","mondrian","catalogo","diseno-editorial"];
	let secondImages = ["disfraces","ilustracion","telas","tipografia-1","tipografia-2"];

	let titles = ["Un primer vistaso", "Una estructura definida", "Texturas familiares", "Tipografia engrillada", "Respetando un esquema"];

	let texts = ['El museo te recibe con un gran portón de hierro, detrás de él un café y la mansión.<br>Con su escalera principal cubierta con una alfombra aterciopelada roja, te adentrás a la boca de la mansión. Encontrando los primeros vistazos de la muestra "El mundo entero es una Bauhaus": Los disfraces del Triadisches Ballett.','Recorriendo la exposición, notamos estructuras geométricas aplicadas en todo tipo de soporte: Desde maquetas de arquitectura a cuadernos ilustrados. Analizando todas las piezas en un conjunto, vamos resolviendo el rompecabezas Bauhaus.','Distintos tipos de texturas decoran el salón de exposiciones. Tanto telas como dibujos otorgan una sensación de "relleno visual" a los espectadores.','Las puestas tipograficas son increíbles. Ver como se disponen las grillas y el uso que hacen con estas hacen que te quedes durante varios minutos analizando. El uso de color y la elección tipográfica están excelentemente aplicados.','Avanzando en la exposición notas trabajos de encuadernado y postering (?). Se ve la unión tipografía + ilustración y su tratamiento en conjunto con el soporte. Excelente.'];

	$('.info-item').click(function(event) {
		/* Act on the event */
		let clickedElement = $(this);
		let modalData = clickedElement.attr('data-modal');
		firstModalFigure.find('img').attr('src', 'img/'+firstImages[modalData]+'.jpg');
		secModalFigure.find('img').attr('src', 'img/'+secondImages[modalData]+'.jpg');

		modalTitle.html(titles[modalData]);
		modalText.html(texts[modalData]);

		modal.css('display', 'grid').hide().fadeIn();
	});

	$('.close-modal').click(function(event) {
		modal.fadeOut();
	});
});
