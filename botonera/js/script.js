let sounds = [];

$(document).ready(function() {

  $.getJSON('json/sounds.json', function(sound) {
      /*optional stuff to do after success */
      console.log(sound);
      console.log(sound[0].path);
      $.each(sound,function(i, button) {
        sounds.push('<button id="sound-'+ i + '">' + sound[i].name + '</button>');
      });
      $.each(sounds,function(i, element) {
        $('.button-grid').append(element);
      });

  });
});
