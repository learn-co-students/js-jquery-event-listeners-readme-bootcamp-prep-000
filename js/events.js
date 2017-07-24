//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
//Define a function getIt that does not accept a parameter.
//The function should bind a click event to the p tag.
//When the paragraph is clicked, the function should alert "Hey!".
function getIt() {
  $('p').on('click', function(){
    alert("hey")
  });
}
function frameIt() {
  $('img').on('load', function() {
      $('img').addClass('tasty')
  });
}
function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71)
      window.alert("You have pressed the G key")
  })
}
function submitIt() {
  $('form').on('submit', function() {
    window.alert("Your form is going to be submitted now.")
  })
}
