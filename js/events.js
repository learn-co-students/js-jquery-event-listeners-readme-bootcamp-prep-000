//define functions here

$(document).ready(function(){

getIt()
pressIt()
submitIt()
frameIt()

});

function getIt() {
  $('p').on('click', function(event) {
    alert('I was clicked')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

// this also works...
// function frameIt() {
//     $('img').addClass('tasty')
// }


function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('You have pressed G');
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.')
  })
}
