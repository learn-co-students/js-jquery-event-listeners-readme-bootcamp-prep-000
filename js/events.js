$(document).ready(function(){
 // call functions here
 getIt();
 frameIt();
 pressIt();
 submitIt();

 });


function getIt() {
  $('p').on('click')
  return alert('I was clicked!')
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  });
}

function pressIt() {
  $("input").on("keydown", function(key) {
    if(key.which === 71) {
    alert('ooooo u did it now my G');
  }
});
}
