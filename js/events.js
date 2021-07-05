$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});
function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').ready(function(){
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $('#typing').on("keydown",function(key){
    if(key.which === "G".charCodeAt()) {
      alert("G key pressed!");
    }
  });
}

function submitIt(){
  $('form').on("submit",function(){
    $('input:first').val('correct')
    if ($('input:first').val() === "correct") {
      alert("Your form is going to be submitted now.");
      return;
    }
    alert("You entered the wrong value.");
    return;
  });
}
