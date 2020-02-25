//define functions here

$(document).ready(function(){

// call functions here

});


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
  $("input").on("keydown", function(e){
  });
}

function submitIt(){
  $("form").on("submit", function(){
    window.alert("Your forim is going to be submitted now.");
  })
}
