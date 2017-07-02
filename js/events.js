function getIt() {
  $("p").on("click",function() {
    alert("Hey!");
  })
}//define functions here
function frameIt() {
  $("img").on("load",function() {
    $(this).addClass("tasty");
  })
}
function pressIt() {
  $("#typing").on("keydown",function(key) {
    if (key.which == 71) {
      alert("G was pressed");
    }
  })
}
function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  })
}
//define functions here
$(document).ready(function(){
getIt();
frameIt();// call functions here
pressIt();
submitIt();
});
