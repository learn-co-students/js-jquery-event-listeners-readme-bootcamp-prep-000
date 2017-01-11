//define functions here

$(document).ready(function(){

// call functions here

});

//The function should bind a click event to the p tag
function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
}

//The function should bind the load event that adds the class tasty
function frameIt(){
  $('img').on("load", function(){
    $('img').addClass("tasty")
  })
}

function pressIt(){
  $('form').on("keydown", function(e){
    if ((e.which || e.detail) === 71){
      alert("You have pressed g!")
    }

  })

}

function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")
  })

}
