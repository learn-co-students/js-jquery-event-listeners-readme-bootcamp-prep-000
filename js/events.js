//define functions here
function getIt(){
  $("p").on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $("img").on("load", function(){
   $("img").addClass("tasty");
  });
}

function pressIt(){
  $("input").on("keydown", function(k){
    if (k.which == 71){
      alert("You pressed G.");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  });
}

function init(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
}

$(document).ready(function(){
  // call functions here
  init();
});