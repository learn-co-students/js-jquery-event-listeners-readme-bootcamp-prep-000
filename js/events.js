//define functions here
function getIt () {
  $("p").on("click", function () {
    alert("Hey!");
  });
}

function frameIt () {
  $("img").on("load", function () {
    $("img").addClass("tasty");
  });
}

function submitIt () {
  $("form").on("submit", function () {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt () {
  $("form input").on("keydown", function (g) {
    if (g.which === 71) {
      alert("You pressed 'g'");
    }
  });
}


$(document).ready(function(){

// call functions here

});
