//define functions here
function getIt() {
  $("p").on("click", function(){
    alert("Hey!");
    return;
  });
}

function frameIt() {
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
  return;
}

function pressIt() {
  $("form").on("keydown", function(e){
    if ((e.which || e.location || e.detail) === "G".charCodeAt(0)) {
      alert("You pressed the G key.");
    }
  });
  return;
}

function submitIt() {
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
  return;
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
