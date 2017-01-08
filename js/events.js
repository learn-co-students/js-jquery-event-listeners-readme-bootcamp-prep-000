// Learn.co Bootcamp Prep 26 JavaScript jQuery Event Listeners

// Define a function, 'getIt, that accepts no parameter(s).
// Bind a 'click' event to the 'p' tag.
// When the paragraph is clicked, the function should alert "Hey!".
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}


// Define a function, 'frameIt', that accepts no parameter(s).
// Bind the 'load' event that adds the class 'tasty' to the image to add a red
// frame to the image.
function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}


// Define a function, 'pressIt', that accepts no parameter(s).
// Bind a 'keydown' event to the input field of the form.
// The event should trigger an alert when the user has pressed the 'g' key down.
function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which == 71){
      alert("You pressed the 'g' key down!!!");
    }
  });
}


// Define a function, 'submitIt', that accepts no parameter(s).
// Bind a 'submit' event to the 'form' that alert's the user that the form will
// be submitted.
function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}

// Ensure page is loaded.
$(document).ready(function(){

// jQuery functions once page has loaded.
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
