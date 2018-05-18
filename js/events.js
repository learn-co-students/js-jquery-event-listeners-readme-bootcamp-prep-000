//define functions here

$(document).ready(function(){

// call functions here
/*getIt();
frameIt();
pressIt();
submitIt();*/

});

function getIt() {
  $("p").on("click", function() {alert("Hey!")})
}

function frameIt() {
  $("img").addClass("tasty");
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You pressed 'G'");
    }
  });
}

function submitIt() {
  $("form").on("submit", function(e) {
    alert("Your form is going to be submitted now.");
  })
}