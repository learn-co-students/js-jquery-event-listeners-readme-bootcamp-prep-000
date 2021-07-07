//define functions here
function getIt() {
  // bind a click event to the p tag
  $('p').on('click', function(){
    // alert "Hey!" when paragraph is clicked
    alert('Hey!');
  });
}

function frameIt() {
  // bind load event
  $('img').on('load', function() {
    // adds the class "tasty" to the image to add a red frame to the image
    $(this).addClass("tasty");
  });
}

function pressIt() {
  // bind a keydown event to the input field of the form "#typing"
  $('#typing').on('keydown', function(e) {
    // alerts a user when they have pressed the G key
    if(e.which === 71) {
      alert("You have pressed 'G'!");
    }
  });
}

function submitIt() {
  // bind a submit event to the form that alerts "Your form is going to be submitted now."
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){
  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
