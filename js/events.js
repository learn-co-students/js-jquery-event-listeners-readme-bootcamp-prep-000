//define functions here

function getIt() {
  $('p').on('click', function(key) {
    alert('Hey!');
});
  
}
// The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
function frameIt (){
    $('img').on('load', function(key) {
     $('img').addClass('tasty')
});
  
}
//The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.
function pressIt () {
  $('input').on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
  
}

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
  submitIt();
});
