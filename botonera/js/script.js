let sounds = [];
let soundPath = [];

$(document).ready(function() {

  $.getJSON('json/sounds.json', function(sound) {
      /*optional stuff to do after success */
      console.log(sound);
      console.log(sound[0].path);
      $.each(sound,function(i, button) {
        soundPath.push("'https://gonzarascon.github.io/botonera/" + sound[i].path + "'");
        sounds.push('<button id="sound-'+ i + '" class = "sound">' + sound[i].name + '</button>');
      });
      $.each(sounds,function(i, element) {
        $('.button-grid').append(element);
      });

  });
  console.log(soundPath);
  let soundButtons = new Howl({
    src : ['https://gonzarascon.github.io/botonera/audios/balada-showmatch.mp3'],
    html5 : true,
    autoplay: false
  });

  $('.sound').on('click', '.selector', function(event) {
    event.preventDefault();
    console.log('click');
    soundButtons.play();
  });

});
