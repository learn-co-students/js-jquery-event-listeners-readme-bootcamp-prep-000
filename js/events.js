function getIt() {
  alert("Hey!");
}

function frameIt() {
 $("img").addClass("tasty");
}

function pressIt() {
  debugger
  $("#typing").on("keydown", function(e) {
    if (e.which === 71) {
      alert("You pressed 'g'!");
    }
  })
}

function submitIt() {
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){
  $("p").on("click", getIt)
  $("img").on("load", frameIt)
  $("#typing").on("keydown", pressIt)
  $("form").on("submit", submitIt)
});
