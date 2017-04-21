//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});

function getIt(){
  $("p").on("click", function() {
    alert ("Hey!");
  })
}

function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  })
}

function pressIt(){
  $("input#typing").on("keydown", function(key){
    if(key.which === 71){
      alert("You pressed G!");
    }
  })
}

function submitIt(){
  $("form").on("submit", alert("Your form is going to be submitted now."));
}
