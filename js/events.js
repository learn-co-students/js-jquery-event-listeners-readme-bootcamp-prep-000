function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    //adds the class "tasty" to the image
    
    $("img").addClass( "tasty" )
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which === 71) {
      alert("You've pressed the 'G' key!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function () {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
  
  getIt()
  frameIt()
  pressIt()
  submitIt()

});
