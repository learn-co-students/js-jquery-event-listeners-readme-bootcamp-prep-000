//define functions here
function getIt(){
  $('p').on('click', function() {
    alert('Hey!');
  })
}



function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which === 71 ){
      alert('Pressed G Key!')
    }
  });
}
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}
function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){
   getIt();
frameIt();
submitIt();
pressIt();
});
