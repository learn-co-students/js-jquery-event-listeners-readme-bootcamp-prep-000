//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt() {
  $('p').on('click', function(key) {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').attr('class', 'tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71){
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}
