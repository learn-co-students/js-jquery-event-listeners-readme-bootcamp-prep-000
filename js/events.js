//define functions here

function getIt(){
  $("p").on("click", function(e){
    alert("Hey!")
  })
}

function frameIt(){
  $("img").on("load", function(e){
    $("img").addClass("tasty")
  })
}
function pressIt(){
  $("input").on("keydown", function(e){
    if( e.which=='71')
      alert("press G")
  })
}
function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){

// call functions here
  
});
