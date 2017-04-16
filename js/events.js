//define functions here

$(document).ready(function(){

    getIt();

   frameIt();

   pressIt();

   submitIt();

// call functions here

});

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input#typing').keydown(function(key) {
    if (key.which === 71) {
      alert("You have pressed the G key.")
    }
  });
}

function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.");
  })

}
