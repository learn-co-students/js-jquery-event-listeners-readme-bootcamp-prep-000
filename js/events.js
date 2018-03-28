
$(document).ready(function(){
});
//Define a function frameIt that does not accept a parameer. The function should bind the LOAD event that adds the class TASTY to the image to add a red frame to the image.

function getIt(){
  $("p").on("click", 
  function(){window.alert("Hey!");
    });
  }
function frameIt(){
  $("img").on("load", 
  function(){
    $("img").addClass("tasty");
  });
}

function pressIt(){
  $("input").on("keydown", function(e){
    if (e.which === 71){
      window.alert("G was pressed.");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    window.alert("Your form is going to be submitted now.");
  });
}

