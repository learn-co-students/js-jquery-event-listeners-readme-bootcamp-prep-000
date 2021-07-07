//define functions here
function getIt() {
  $('p').on('click', function() {
    window.alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('You have pressed the G key')
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
