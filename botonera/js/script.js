let sounds = [];

$(document).ready(function() {

  $.getJSON('json/sounds.json', function(sound) {
      /*optional stuff to do after success */
      console.log(sound);
      console.log(sound[0].path);
      $.each(sound,function(i, button) {
        sounds.push('<button id="sound-'+ i + '">' + sound + '</button>');
      });

      $('.button-grid').append(sounds[0]);
  });
});
