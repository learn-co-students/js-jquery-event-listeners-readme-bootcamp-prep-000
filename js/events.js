//define functions here
function getIt() {
  $('p').on('click', function() {
    window.alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71) {
      alert("You've presses the G key");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    window.alert('Your form is going to be submitted now.')
  })
}
$(document).ready(function(){
  getit();
  frameIt();
  pressIt();
  submitIt();

// call functions here

});
