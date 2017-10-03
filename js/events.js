//define functions here
function getIt(){
   $('p').on("click", function() {
    alert ("Hey");
 })
}

function frameIt(){
$('img').on("load", function(){
  $('img').attr('class', "tasty");
    }
  })
 }

 function pressIt(){
  $('input').on('keydown', function(key){
    if (key.which == 71){
    alert ('G!');
    }
  })
 }

 function submitIt(){
    $("form").on("submit", function() {
     if ($( "input:first" ).val() === "I love jQuery") {
        alert('your form is going to be submitted now');
       return;
   }
  $("div").html("Not valid!");
 })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
 // call functions here
