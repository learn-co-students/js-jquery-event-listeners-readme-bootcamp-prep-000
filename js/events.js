//define functions here

function getIt() {
  $( 'p' ).on( 'click', function() {
    alert( "Hey!" )
  });
}

function frameIt() {
  $( 'img' ).on( 'load', function() {
    $( this ).addClass( 'tasty' )
  });
}

function pressIt() {
  // g = 71
  $( 'form input' ).on( 'keydown', function( c ) {
    if( parseInt( c.which, 10 ) === 71 ) {
      alert( 'G!' )
      console.log( 'G!' )
    }
  });
}

function submitIt() {
  $( 'form' ).on( 'submit', function() {
    alert( 'Your form is going to be submitted now.' )
  });
}

$(document).ready( function() {
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
