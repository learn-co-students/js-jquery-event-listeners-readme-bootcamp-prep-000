//define functions here

function getIt() {
  alert("hey!");
}

function frameIt() {
  $("img").addClass("tasty")
}

function pressIt() {
  $("#typing").on('keydown', function(key) {
    if(key.which == 71) {
      alert('G was pressed');
    }
  })
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}



$(document).ready(function() {

// call functions here

$("p").on("click", getIt)

frameIt()

pressIt()

$("form").on("submit", submitIt)

});
