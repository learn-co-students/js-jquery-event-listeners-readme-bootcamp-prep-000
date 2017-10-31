//define functions here
function getIt(){
  $('p').on('click', _ => alert('Hey!'));
}

function frameIt(){
  $('img').on('load', _ => $('img').addClass('tasty'));
}

function submitIt(){
  $('form').on('submit', _ => alert('Your form is going to be submitted now.'));
}

function pressIt(){
  $('input').on('keydown', e => {
    if (e.which == 71) alert('You pressed the G button');
  });
}

$(document).ready(function(){

});
