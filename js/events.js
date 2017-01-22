//define functions here

function getIt() {
  $('p').on('click', function(e){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(e){
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    if(key === 71){
      alert("You pressed g!");
    }
  });
}

function submitIt() {
  $('form').on('submit', function(e){
    alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){

// call functions here

});
