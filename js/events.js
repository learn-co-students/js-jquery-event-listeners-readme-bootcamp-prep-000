function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $(document).ready( function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form:first').on('keydown', function(key) {
    if(key.which === 71) {
      alert('You presssed G');
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
