//define functions here



// call functions here
var getIt = function() {
  $("p").on("click",function() {
    alert("Hey!");
  });
}

var frameIt = function() {
  $("img").on("load",function() {
    $("img").addClass('tasty');
    return;
  });
}

var pressIt = function() {
  $("input").on("keydown", function(key) {
    if (key.which == 71) {
      alert("You pressed the G Key!");
    }
  });
}

var submitIt = function() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
