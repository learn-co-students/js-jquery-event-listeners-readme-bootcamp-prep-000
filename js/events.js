//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  });
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $("input#typing").on("keydown", function(e) {
      if(e.which === 71) {
        alert("G");
      }
  });
}

function submitIt() {
  $('form').submit(e =>
    alert('Your form is going to be submitted now.')
  )
}

$(document).ready(function() {
getIt();
// call functions here
frameIt();
pressIt();
submitIt();

});
