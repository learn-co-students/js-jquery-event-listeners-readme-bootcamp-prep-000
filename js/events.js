//define functions here

/*
Define a function getIt that does not accept a parameter. The function
should bind a click event to the 'p' tag. When the paragraph is clicked,
the function should alert "Hey!".
*/
function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

/*
Define a function frameIt that does not accept a parameter. The
function should bind the load event that adds the class 'tasty' to the
image to add a red frame to the image.
*/
function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty')
  })
}

/*
Define a function pressIt that does not accept a parameter. The
function should bind a 'keydown' event to the input field of the form that
alerts a user when they have pressed the 'g' key.
*/
function pressIt() {
  //index-test.js has 'typing' as input
  $("#typing").on("keydown", function(event) {
    // ASCII codes table has 'G' listed as 71
    if (event.which === 71) {
      alert("Great Scott!!! You've pressed the 'G' key!?!?")
    }
  })
}

/*
Define a function submitIt that does not accept a parameter. The
function should bind a 'submit' event to the form that alerts "Your form
is going to be submitted now.".
*/
function submitIt() {
  // pass 'form ' to the jQuery function, as per the specs
  $('form').on('submit', function(event) {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here

});
