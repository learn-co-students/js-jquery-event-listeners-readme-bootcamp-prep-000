//define functions here
function getIt() {
  $("p").on('click', function() {
    alert("Paragraph");
  })
}

function frameIt() {
  $("img").on('load', function(){
    $("img").addClass("tasty")
  })
}

function submitIt() {
  $("form").on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $("#typing").on('keydown', (e) => {
    if (e.which === 71) {
      alert("you pressed g")
    }
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  submitIt();
  pressIt();

});
