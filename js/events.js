//define functions here

$(document).ready(function(){

  window.getIt = function(){
    $('p').on("click", function(){
      alert("Hey!");
    });
  }
  
  window.frameIt = function(){
    $('img').on("load", function(){
      $('img').addClass('tasty');
    });
  }

  window.pressIt = function(){
    $('#typing').on("keydown", function(key){
      if(key.which == 71){
        alert("You pressed G!");
      }
    });
  }
  
  window.submitIt = function(){
    $('form').on("submit", function(){
      alert('Your form is going to be submitted now.');
    });
  }

});
