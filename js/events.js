//define functions here

function getIt(){
  $('p').on("click", 
  function clickP() {
    alert("Hey!");
  }
    );
}

function frameIt(){
  $('img').on("load", 
  function loadImg() {
    $('img').addClass('tasty');
    return;
  }
    );
}

function pressIt(){
  $('form').on("keydown", 
  function keydownAlert(key) {
  if (key.which === 71) {
    alert("You pressed G!");
    return;
  }}
    );
}

function submitIt(){
  $('form').on("submit", 
  function submitAlert() {
    alert("Your form is going to be submitted now.");
    return;
  }
    );
}


$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});

