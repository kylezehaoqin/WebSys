document.getElementById("play-all-btn").addEventListener( 'click', function() {
  alert( "clicked" );
  var mp3s = document.getElementsByClassName( "mp3" );
  var mp3Length = mp3s.length;
  for( var i=0; i < mp3Length; i++ ) {
    (mp3s[i]).play();
  }
});

// function playAll() {
//   var mp3s = document.getElementsByClassName( "mp3" );
//   var mp3Length = mp3s.length;
//   for( var i=0; i < mp3Length; i++ ) {
//     alert( mp3s[i] );
//   }
// }
