//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});

function getIt() {
  $("p").click(function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').ready(function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(event) {
    // A = 65
    // G = 71
    if (event.which == 71) {
      alert('you\'ve pressed G')
    }
  })
}

function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.")
  })
}
