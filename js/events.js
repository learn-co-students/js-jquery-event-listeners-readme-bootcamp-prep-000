$(document).ready(function(){

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
  $('input:first').on("keyup",function(key){
    if(key.which === "G".charCodeAt()) {
      alert("G key pressed!");
      $('input:first').val('correct')
    }
  });
}

function submitIt(){
  $('form').on("submit",function(){
    if ($('input:first').val() === "correct") {
      alert("Your form is going to be submitted now.");
      return;
    }
    alert("You entered the wrong value.");
    return;
  });
}
  getIt()
  frameIt()
  pressIt()
  submitIt()

});
