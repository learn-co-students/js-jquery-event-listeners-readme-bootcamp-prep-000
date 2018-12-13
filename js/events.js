//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!"); 
  }); 
}

function frameIt(){ 
  $('img').on('load', function(){
    $('img').addClass("tasty"); 
  }); 
}  
function pressIt(){
  $("input").on("keydown", function(i){
    if (i.which === 71){
      window.alert("The letter G was pressed!");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    window.alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
 getIt(); 
 frameIt();
 pressIt(); 
 submitIt(); 
}); 


