//define functions here
function getIt() {
  $('p').on('click', function() {
      alert("Hey!");
  });
}
function frameIt() {
  $(document).on('load', function() {
    $("img").addClass("tasty");
  });
}

$(document).ready(function(){

getIt();
frameIt();
// call functions here

});
