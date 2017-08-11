//define functions here
function getIt() {
  $('p').on('click', e => {window.alert('Hey!')})
}

function frameIt() {
  $('img').on('load', e => {$('img').addClass('tasty')})
}

function pressIt() {
  $('input[type="text"]').on('keydown', e => {if(e.which == 71) window.alert('You pressed the G')})
}

function submitIt() {
  $('form').on('submit', e => {window.alert('Your form is going to be submitted now.')})
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});
