//define functions here

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty").css("border", "1px solid red");
  });
}

function pressIt() {
  $("input:first-child").on("keydown", function(key) {
    if(key.which === 71) {
      alert("you have pressed G");
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
