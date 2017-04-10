//define functions here

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
  $('#typing').on('keydown', function(e) {
    if (e.which === 71 || e.which === 103) { // G or g
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $('form').submit(function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
