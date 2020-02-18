//define functions here
function getIt()
{
  $('p').on("click", function(){
    //action you want taken
    alert("Hey!");
});
}
function frameIt()
{
    $("img").addClass('tasty').on("load", function(){
   
   });
}
function pressIt()
{
  $("form").on("keydown", function() {
    if ($( "input:first" ).val() === "G") {
    alert('G is pressed');
    return;
  }
})
}
function submitIt()
{
  $("form").on("keydown", function() {
    
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
