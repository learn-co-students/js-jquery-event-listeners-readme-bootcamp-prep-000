function getIt() {
  $('p').on('click', function() {
    window.alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    window.alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('form input').on('keydown', function(key) {
    if (key.which == 71) {
      window.alert("You just pressed the 'g' key.")
    }
  })
}

$(document).ready(function(){

getIt()
frameIt()
submitIt()
pressIt()

});
