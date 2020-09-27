//define functions here
function getIt(){
  $("p").on("click", function(){
    window.alert("Hey!");
    });
  }
  
  function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $("input").keydown("pressed", function(key){
    if (key.which === 71) {
      window.alert("You have pressed the G key.");
    }
  })
}

function submitIt() {
  $("form").submit("submit", function() {
    window.alert("Your form is going to be submitted now.")
  })
}
  
$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});

