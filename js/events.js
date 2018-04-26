//define functions here
function getIt(){
  $('p').on('click', function() { 
    alert('Hey!');
    return;
  });
}

function frameIt(){
  $('img').on('load', function() {
    $('img').addClass('tasty');
    return;
  });
}

function pressIt(){
  $('input[type="text"]').on('keydown', function(key) {
    if (key.which === 71) { alert("You pressed G!")}
    return;
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
    return;
  });  
}

$(document).ready(function(){
  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});