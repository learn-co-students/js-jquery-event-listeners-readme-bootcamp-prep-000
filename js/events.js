function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
 })
}
function frameIt() {
  $('img').on ("load", function() {
    $('img').addClass('tasty')

  })
}//define functions here
$(document).ready(function(){

 //getIt();// call functions here
  frameIt();
});
