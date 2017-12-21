function getIt(){

$(document).ready(function(getIt){
});
$('p').on('click', function(){
  alert( "Hey" )}
);
}


function frameIt(){
  $(document).ready(function(frameIt){
  });
  $('img').on('load', function(){
  $('img').addClass('tasty');
});
}

function pressIt(){
  $(document).ready(function(pressIt){
  });
  $('form').on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}

function submitIt(){
  $(document).ready(function(pressIt){
  });
  $( 'form' ).submit(function( event ) {
  alert( 'Your form is going to be submitted now.' );
});
}
