//define functions here

$(document).ready(function(){

getIt();
frameIt();
pressIt();
});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input:first').bind('keydown', function(e) {
    if(e.which == 71) {
      alert("You have pressed the G key")
    }
  })
}

function submitIt() {
  $('form').bind('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}