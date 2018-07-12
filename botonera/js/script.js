let sounds = [];
let soundPath = [];

$(document).ready(function() {

  $.getJSON('json/sounds.json', function(sound) {
      /*optional stuff to do after success */
      $.each(sound,function(i, button) {
        soundPath.push("'https://gonzarascon.github.io/botonera/" + sound[i].path + "'");
        sounds.push('<button id="sound-'+ i + '" class = "sound" data-sound = "' + i + '">' + sound[i].name + '</button>');
      });
      $.each(sounds,function(i, element) {
        $('.button-grid').append(element);
      });

  });
  console.log(soundPath);
  let soundButtons = new Howl({
    src : $.map(soundPath, function(a) {
      return a;
    }),
    html5 : true,
    autoplay: false
  });

  $('.button-grid').on('click','.sound', function(event) {
    event.preventDefault();
    soundButtons.stop();
    let actualSound = $(this).attr('data-sound');
    console.log(actualSound);
    soundButtons.play();
  });

});
