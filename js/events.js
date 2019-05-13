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
  
  function pressIt(){
    $("input").on("keydown", function(g){
      if(g.which === 71){
        window.alert("Hey homie you pressed G");
      }
    });
  }
  
  function submitIt(){
    $("form").on("submit", function(){
    window.alert("Your form is going to be submitted now.");
    });
  }

$(document).ready(function(){

});
