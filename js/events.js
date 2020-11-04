//define functions here

$(document).ready(function(){

// call functions here
  $('p').on('click', getIt);
  
  $('img').on('load', frameIt);
  
  $('input').on('keydown', pressIt);
  
  $('form').on('submit', submitIt);
});


function getIt() {
  alert('Hey!');
  
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}