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

function submitIt() {
  
}


$(document).ready(function(){

// call functions here

});
