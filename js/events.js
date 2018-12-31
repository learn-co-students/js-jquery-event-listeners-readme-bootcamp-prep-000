//define functions here
function getIt() { 
  var pTag = $('p').on('click', function (){
    alert("Hey!");
  });
  
}

function frameIt() {
  $('img').addClass('tasty');
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

function pressIt() {
  $("#typing").on('keydown', function(key) {
    if (key.which === 71){
      alert("You pressed G!");
    }
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
