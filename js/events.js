function getIt() {
  $('p').on( 'click', alert('Hey!'));
}

function frameIt() {
  $('img').on( 'load', function(){
    $(this).addClass('tasty')});
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71){
      alert('G has been pressed');
    }
  });
}

function submitIt() {
  $('form').on( 'submit', function() {
      alert('Your form is going to be submitted now.');
      return;
  });
}

$(document).ready(function(){



});
