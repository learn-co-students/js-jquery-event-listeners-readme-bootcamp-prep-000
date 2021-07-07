//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    return;
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which === 71) {
      alert('You did the thing!');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}


frameIt();

$(document).ready(function(){

getIt();
pressIt();
submitIt()

});
