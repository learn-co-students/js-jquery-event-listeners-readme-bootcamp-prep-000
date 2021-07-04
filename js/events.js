//define functions here

function getIt() {
  $('p').on('click', alert('Hey!'));
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  });
}

function submitIt() {
  $('form').on('submit', alert('Your form is going to be submitted now.'))
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which === 71)
      alert('g was pressed.')
  });
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
submitIt()
pressIt()
});
