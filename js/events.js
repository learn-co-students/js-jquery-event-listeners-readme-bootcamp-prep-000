//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});

function getIt() {
  $(document).on('click', function(key) {
    if(key) {
      alert("Hey!")
    }
  })
}


function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(event) {
    if(event.which === 71) {
        alert('G')
    }
  })
}


function submitIt() {
  $('form').on('submit', function(event) {
    alert("Your form is going to be submitted now.")
  })
}
