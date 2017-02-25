//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You have pressed the G key")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});




// $(document).ready(function(){
//   $("p").on("click", function getIt() {
//     alert('Hey!')
//   });
// });
// $("form").on("submit", function() {
//   if ($( "input:first" ).val() === "correct") {
//     alert('your form is going to be submitted now');
//     return;
//   }
//   alert("you entered the wrong value");
//   return;
// });
