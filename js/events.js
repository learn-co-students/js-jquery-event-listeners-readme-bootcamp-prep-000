//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function() {
    $( this ).addClass('tasty');
  });
}

function pressIt() {
  $('form input:first-child').on("keydown", function(key) {
    if(key.which === 71 || key.detail === 71) {
      alert("You pressed G!");
    }
  });
}

function submitIt() {
  $('form:last').on("submit", function() {
    
    
    alert("Your form is going to be submitted now.");
  });
}
 

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
