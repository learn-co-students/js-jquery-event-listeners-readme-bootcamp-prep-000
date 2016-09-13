//define functions here

function getIt() {
  $('p').on("click", function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $("input").on("keydown", function(key) { // also works for form rather than input, but the former seems overbroad
    if (key.which == 71) {
      alert('g was pressed');
      return;
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
    })
}

$(document).ready(function(){

// call your functions here

$getIt();
$frameIt();
$pressIt();
$submitIt();

});
