//define functions here
function getIt() {
  alert("Hey!");
  return;
}

function frameIt(){
  $("img").addClass("tasty");
  return;
}

function pressIt(){
  $("#typing").keydown(function(key){
    if(key.which == 71) {
      alert("You pressed the G key.");
    }
  });
}

function submitIt(){
  alert("Your form is going to be submitted now.");
  return;
}

$(document).ready(function(){
  $("p").on("click", getIt());
  $("img").on("load", frameIt());
  $("#typing").on("keydown", pressIt());
  $("form").on("submit", submitIt());
});
