

function getIt(){
  $("p").on("click", function(){
    alert("Hey!")
  })
}

function pressIt(){
  $("input").on("keydown", function(key){
    if(key.which===71){
      alert("You pressed G!!")
    }
  })
}

function submitIt(){
  $("form").on("submit",function(){
    alert("Your form is going to be submitted now.")
  })
}

function frameIt(){
  
  $("img").on("load", function(){
    $("img").addClass("tasty")
  })
}

$(document).ready(function(){
getIt()
pressIt()
submitIt()
frameIt()
// call functions here

});
