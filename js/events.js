//define functions here
function getIt(){
  $('p').on('click', function(e){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').addClass("tasty");
}

function pressIt(){
  $('#typing').on('keydown', function(e){
    if (e.which === 71) alert("Hey!");
  });
}

function submitIt(){
  $('form').on('submit', function(e){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  //$('img').addClass("tasty");
  pressIt();
  submitIt();

});
