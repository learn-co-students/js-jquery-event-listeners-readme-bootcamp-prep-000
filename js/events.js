//define functions here
function getIt() {
  $('p').on('click', function() {
      alert("Hey!");
  });
}
function frameIt() {
  $('img:first').on('load', function() {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
    }
  });
}
$(document).ready(function(){

getIt();
frameIt();
// call functions here

});
