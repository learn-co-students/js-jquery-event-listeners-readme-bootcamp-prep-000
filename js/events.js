//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on("load", function() {
    $('img').addClass("tasty");
  });
}

funcion pressIt(){
  $('input').on("keypress", function() {
    if(key.which == 71) {
      alert("G was pressed")
    });
}

function submiIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  });
}
$(document).ready(func
  tion(){
    // call functions here
    getIt();
    frameIt();
    pressIt();
    SubmitIt();
});
