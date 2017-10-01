//define functions here
function getIt() {
   $('p').on("click", function () {
    alert("Hey!");
   })
 }

 function frameIt() {
    $('img').on("load", function() {
   $('img').addClass("tasty");
  })
 }

 function pressIt() {
  $('#typing').on("keydown", function(press) {
    if (press.which === 71) {
   alert("You have entered g.");
     }
   })
 }

 function submitIt() {
 $('form').on("submit", function() {
   alert("Your form is going to be submitted now.");
   })
 }

 $("form").on("submit", function() {
   if ($( "input:first" ).val() === "correct") {
     alert('your form is going to be submitted now');
     return;
   }
   alert("you entered the wrong value");
   return;
 });

function () {

}
  $(document).ready(function(){

  // call functions here
