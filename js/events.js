//define functions here
function getIt() {
  $('p').on('click');
  alert('Hey!');
}

function frameIt() {
  $('img')
    .on('load')
    .addClass('tasty');
}

function pressIt() {
  $('input#typing').keydown(function(key) {
    if (key.which === 71) {
      alert('You have pressed the G key.');
    }
  });
}

function submitIt() {
  $('form').submit();
  alert('Your form is going to be submitted now.');
}

$(document).ready(function() {
  // call functions here
  submitIt();
  pressIt();
  frameIt();
  getIt();
});
