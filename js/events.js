//define functions here

$(document).ready(function(){

// call functions here
  getIt()
  framtIt()
  pressIt()
  submitIt()


});

function getIt() {
  $("p").click('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('You have pressed G!');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}
