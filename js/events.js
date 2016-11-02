//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $('p').click(function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('g is pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}
