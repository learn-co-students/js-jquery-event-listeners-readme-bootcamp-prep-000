function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

// Note: If you use '$(this)' with an arrow-function callback,
// it will refer to the Window, not the event.target
function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $("form input#typing").on("keydown", (event) => {
    if (event.which === 71) {     // ('71' is ASCII code for 'G')
      alert("You pressed 'G'.");
    }
  });
}

function submitIt() {
  $("form").on("submit", () => alert("Your form is going to be submitted now."));
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
