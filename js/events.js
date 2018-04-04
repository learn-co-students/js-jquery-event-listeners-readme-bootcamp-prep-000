//define functions here


function getIt() {
  $("p").on("click", function(event) {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function(event) {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $("input").on("keydown", function(event) {
    if (parseInt(event.which) === 71) {
      alert("you pressed g");
    }
  });
}

function submitIt() {
  $("form").submit(function(event) {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
