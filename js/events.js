//define functions here
function getIt() {
  $('p').on("click",
  function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function(image) {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $(':text').on("keydown", function(key) {
    if(key.which === 71) {
      alert("You pressed the G key");
    }
  });
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){

// call functions here

});
