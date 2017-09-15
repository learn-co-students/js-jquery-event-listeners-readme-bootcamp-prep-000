function getIt() {
  $('p').click(function() {
    alert('Hey!');
    return;
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    return;
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert('You prest -G- !!!');
      return;
    }
    return;
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
    return;
  })
}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

submitIt();

});
