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
getIt()
frameIt()
pressIt()
submitIt()

})