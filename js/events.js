//define functions here
function getIt() {
  $("p").on("click", function(){
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function(){
    $(this).addClass("tasty")
  });
}

function pressIt() {
  $("input").on("keydown", function(e){
    var key = e.which||e.keyCode;
    if(key==71) alert("You have found my G spot.");
  });
}

function submitIt() {
   $("form").on("submit", function(){
     alert("Your form is going to be submitted now.");
   });
}

$(document).ready(function(){

// call functions here

});
