let sounds = [];
let soundPath = [];
let soundButtons;
$(document).ready(function() {

  $.getJSON('json/sounds.json', function(sound) {
      $.each(sound,function(i, button) {
        soundPath.push({ name:  sound[i].file});
        sounds.push('<button id="sound-'+ i + '" class = "sound" data-sound = "'+ sound[i].file + '">' + sound[i].name + '</button>');
      });
      $.each(sounds,function(i, element) {
        $('.button-grid').append(element);
      });

      ion.sound({
      sounds: soundPath,
      path: "https://gonzarascon.github.io/botonera/audios/",
      preload: true,
      multiplay: false
      });

      console.log(soundPath);
  });


  $('.button-grid').on('click','.sound', function(event) {
    event.preventDefault();
    ion.sound.stop();
    let actualSound = $(this).attr('data-sound');
    $('#stop').fadeIn('300');
    console.log(actualSound);
    ion.sound.play(actualSound);
  });

  $('#stop').click(function(event) {
    ion.sound.stop();
    $(this).fadeOut('300');
  });

});
