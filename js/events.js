//define functions here

// 1.
function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

// 2.
function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
  })
}

// 3.
function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You pressed the G-button")
    }
  })
}

// 4.
function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
    return;
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
