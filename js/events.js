//define functions here

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});

function getIt(){
  $('p').on('click', function(){
    return alert("Hey");
  });
}
function frameIt(){
  return $('img').addClass('tasty');
}
function submitIt(){
  return $('form').on('submit', function(){
  alert("Your form is going to be submitted now.")});
}
function pressIt(){
  return $(document).on('keydown', function(key){
    if (key.which == 71){
    alert('G key was pressed down.');
    }
});
}
/*
Define a function getIt that does not accept a parameter. The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".

Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.

Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.

Define a function submitIt that does not accept a parameter. The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
*/
