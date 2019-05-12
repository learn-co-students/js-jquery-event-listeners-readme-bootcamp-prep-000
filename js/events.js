//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').attr({class: "tasty", border: "red"});
  })
}

function pressIt() {
  $("input").on("keydown", function(e) {
    if (e.which === 71) {
      alert("G key pressed");
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

});
