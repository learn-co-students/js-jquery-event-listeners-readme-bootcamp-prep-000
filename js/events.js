//define functions here

function getIt () {
  
  $('p').on("click", function() {
    
      alert("Hey!");    
    
  }); //close parentheses here for jquery thing
}

function frameIt () {
  $('img').on('load', function() {
    $("img").addClass("tasty"); //look up .addClass() on jQuery website for more info.
    
  }); //close parentheses here for jquery thing
  
}
    
function pressIt () {
  
  $(document).on('keydown', function(key) {
    if (key.which == 71) {
      alert("You pressed 'G'");
      
    }
  }); //close parentheses here for jquery thing
  
}

function submitIt () {
  
  $("form").on("submit", function () {
      alert ('Your form is going to be submitted now.');
      return;
  }); //close parentheses here for jquery thing
  
  
  
}





$(document).ready(function(){

// call functions here

});
