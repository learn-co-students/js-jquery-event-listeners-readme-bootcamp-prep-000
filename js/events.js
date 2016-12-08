//define functions here

function getIt() {
  $("p").on("click", function(e) {
  alert("Hey!");
});
}

function pressIt() {
  $("input").on("keydown", function(e){
    if (e.which == 71) {
      alert("You have pressed g");
    }
  });
}


/* function pressIt(key) {
  if (key.which == 71) {
    alert("You have pressed g");
    return;
  }
  return;
} */


function frameIt() {
  $("img").addClass("tasty");
  $("img").css("border-color : red");
  return;
}

function submitIt() {
  alert("Your form is going to be submitted now.");
  return;
}

$(document).ready(function(){
  getIt();
  pressIt();
  $("form").on("submit", submitIt());
  $("img").on("load", frameIt());
// call functions here

});
