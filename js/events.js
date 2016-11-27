function getIt() {
  $("p").on("click", alert("Hey!"));
}

function frameIt() {
  var img = $("img");
  img.on("load", function() {
    img.addClass("tasty");
  })
}

function pressIt() {
  $("#typing").on("keydown", function(e){
    if (e.which === 71) {
      alert("g was pressed");
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
