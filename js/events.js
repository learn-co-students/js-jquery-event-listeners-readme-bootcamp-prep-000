//define functions here

$(document).ready(function(){

// call functions here

});
function getIt() {
  $("p").on("click", function () {
    alert("Hey!")
  })
}
function frameIt () {
  $('img').on('load').addClass ('tasty')
}
//Define a function submitIt that does not accept a parameter. The function should bind a submit event to the form that alerts "Your form is going to be submitted now."
function submitIt() {
  $("form").on("submit", function () {
    if ($( "input:first").val() === "correct") {
      alert('Your form is going to be submitted now.');
      return
    }
    alert("you entered the wrong value");
    return
  })
}
//Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.
function pressIt () {
  $(document).on('keydown', function (key) {
    if(key.which == 71) {
      alert('G was pressed')
    }
  })
}
