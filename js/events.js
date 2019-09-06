//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});

function getIt() {
  $("p").on("click", alert("Hey!"))
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty")
})
}

function pressIt() {
  $("#typing").on("keydown", function(e) {
    if (e.which === 71) {
      alert("You have pressed g.")
    }
  })
}

function submitIt() {
  $("#submit").on("click", alert("Your form is going to be submitted now."))
}
