//define functions here
function getIt() {
    //bind a click even to the p tag, when p is clicked, the function should alert "Hey!"
    $('p').on('click', function() {
      alert("Hey!")
    })
}

function frameIt() {
  //bind the load event to add the class tasty to the image and add a red frame to the image
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  //bind a keydown event to the input field of the form that alerts a user when they have pressed the g key
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert("g was pressed.")
    }
  })
}

function submitIt() {
  //bind a submit event to the form that alerts "Your form is going to be submitted now."
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
  get()
  frameIt()
  pressIt()
  submitIt()

});
