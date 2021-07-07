function getIt() {
  $("p").on("click", alert("Hey!"))
};

function frameIt() {
  $("document").on("load", $("img").addClass("tasty"));
};

function pressIt() {
  $("form").on("keydown", function(key) {
    if (key.which === 71) {
      alert("You pressed G button!");
    }
  })
};

function submitIt() {
  $("form").on("submit", alert("Your form is going to be submitted now."));
};

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
