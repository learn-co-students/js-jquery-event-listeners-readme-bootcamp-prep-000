//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $(document).on('load', function() {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('input').on('keydown', function(event) {
    if (parseInt(event.which) === 71) {
      alert("You pressed 'G'!")
    }
  })
}

$(document).ready(function(){

  // call functions here
  getIt()
  frameIt()
  submitIt()
  pressit()
});
