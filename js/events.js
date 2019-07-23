//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $("form").on("keydown", function(e) {
    if (e.which == 71) {
      alert("pressed g");
    }
  });
}

function submitIt() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    alert("Your form is going to be submitted now.");
    return ;
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
