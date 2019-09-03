//define functions here
function getIt() {
   $('p').on("click", function () {
     alert("Hey!");
   })
 }

function frameIt(){
  $("img").on('load', function(){
    $("img").addClass('tasty');
  })
}

function pressIt(){
  $("input").on('keydown', function(e){
    if(parseInt(e.which) === 71){
      alert('You just pressed G!');
    }
  })
}

function submitIt(){
  $("form").on('submit', function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){


});
