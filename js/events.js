//define functions here

function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  });
}

//Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.

function frameIt() {
  $("img").addClass("tasty")
  //$("img").on("load", function() {img.addClass="tasty"})
}

//function frameIt() {
//  $('img').on('load', function() {
//    $('img').addClass('tasty')
//  })
//}

// Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.
function pressIt() {
  $("#typing").on("keydown", function(key) {
    if(key.which === 71) {
      return alert("g was pressed")
    }
  })
}


function submitIt() {
  $("form").on("submit", function()
  {alert("Your form is going to be submitted now.")
  })
}


$(document).ready(function(){

// call functions here


});
