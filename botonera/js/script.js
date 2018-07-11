let sounds = [];

$(document).ready(function() {

  $.getJSON('botonera/json/sounds.json', function(sound) {
      /*optional stuff to do after success */
      $.each(sound,function(i, button) {
        sounds.push('<button id="sound-'+ i + '">' + button + '</button>');
      });

      $('.button-grid').append(sounds[0]);
  });
});
