//define functions here
// event handler on paragraphs that alert message when clicked
function getIt() {
  $('p').on('click', function() {
    alert('hey!');
  });
}
//
function frameIt() {
  // gets the images (there is 1) and adds event handler waiting for load
  $('img').on('load', function() {
    // once img is loaded, add class 'tasty' for a boarder
    $('img').addClass('tasty');
  });
}
// alerts user when they press g
function pressIt() {
  // adds event handler on element with id of typing and accepts the keys
  $('#typing').on('keydown', function(keys) {
    // test if the letter that they enter is 'g' or not
    if (keys.which === 71) {
      // if it is user gets an alert
      alert('you just pressed G!');
    }
  });
}
//
function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
pressIt();
submitIt();
});
