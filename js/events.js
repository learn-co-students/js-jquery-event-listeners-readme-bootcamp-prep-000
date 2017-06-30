//define functions here

$(document).ready(function(){

  $("p").on("click", getIt);
  $("document").on("load", frameIt);
  $("#typing").on("keydown", function(e) {
    pressIt(e.which);
  });
  $("form").on("submit", submitIt);

});

function getIt() {
  alert("Hey!");
}

function frameIt() {
  $("img").addClass("tasty");
}

function pressIt() {
  $("#typing").on("keydown", function(e) {
    if (e.which == 71) {
      alert("G Pressed!");
    }
  });
}

function submitIt() {;
  alert("Your form is going to be submitted now.");
}
