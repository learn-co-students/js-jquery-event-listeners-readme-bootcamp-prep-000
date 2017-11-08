//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  })
}

function pressIt() {
  $('input#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert();
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){

// call functions here



});
