function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which == 71){
      alert('yall done pressed the G key! o snap!')
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.') ;
    return;
  })
}

$(document).ready(function(){

getIt()

frameIt()

pressIt()

submitIt()

});
