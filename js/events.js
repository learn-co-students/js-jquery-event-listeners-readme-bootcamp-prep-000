//define functions here

function getIt() {
  alert("Hey!");
}

function frameIt () {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  }
  )}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
  alert('Your form is going to be submitted now.');
  });
}


/*(Note that formatting passes for each of these. While it is much
*simpler to call the function in document.ready(), you could
*put the listener in there and just have a non-nested function called.
*/
$(document).ready(function(){
$('p').on('click', getIt());
frameIt();
pressIt();
submitIt();
// call functions here

});
