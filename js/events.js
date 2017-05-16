//define functions here
function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  alert('You have pressed the G key.');
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready() {
  $('p').on('click', getIt());
  $(document).on('load', frameIt());
  $('#input').on('keydown' === 71, pressIt());
  $('form').on('submit', submitIt());
});
