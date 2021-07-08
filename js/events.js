//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('.tasty').append('<img src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg">');
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which == 71) {
      alert("You pressed the G key.");
    }
  })
}

function submitIt() {
  $("form").on('submit', function() {
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
