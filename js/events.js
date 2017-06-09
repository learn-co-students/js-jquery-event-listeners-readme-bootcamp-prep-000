//define functions here

$(document).ready(function() {
  getIt();
  frameIt();
  submitIt();
  pressIt();
});

function getIt(params) {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt(params) {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
    return;
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('g was pressed');
    }
  });
}
