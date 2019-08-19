//define functions here
//getIt, clicks within paragraph generates alert ("Hey!")
function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
}
//frameIt, adds red frame to image
function frameIt(){
  $('img').on("load", function(){
    $('img').addClass('tasty')
    })
}
//pressIt,alerts when g is typed into the input field
function pressIt(){
  $('form').on('keydown', function(key){
    if(key.which == 71){
       alert('G was pressed')
     }
   })
  }
//submitIt, upon submitting, alerts form is being submitted
function submitIt(){
  $('form').on('submit', function(){
    alert ("Your form is going to be submitted now.")
  })
}


$(document).ready(function(){
// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
