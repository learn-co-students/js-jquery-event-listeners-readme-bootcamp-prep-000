//define functions here
var getIt = function() {
    alert('Hey!')

}


function frameIt() {

      $('img').attr('class', 'tasty');

}


var pressIt = function(e) {
  const key = parseInt(e.detail || e.which)
  if(key === 71) {
    alert('You pressed the G key')
  }
}


var submitIt = function() {
  alert('Your form is going to be submitted now.')
}




$(document).ready(function(){
  $('p').on('click', getIt);

$('img').on('load', frameIt);

$('input').on('keydown', pressIt);

$('form').submit('submitIt');

// call functions here
//$('input').addEventListener('click', func)

});
