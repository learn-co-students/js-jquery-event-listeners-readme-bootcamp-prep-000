//define functions here
var getIt = function() {
    alert('Hey!')

}


function frameIt() {

      $('img').attr('class', 'tasty');

}


var pressIt = function() {
  $('input').on('keydown', function(e){


  if(parseInt(e.detail || e.which) === 71) {
    alert('You pressed the G key')
  }
});


var submitIt = function() {
  alert('Your form is going to be submitted now.')
}




$(document).ready(function(){


  $('p').on('click', getIt);

$('img').on('load', frameIt);


$('form').submit('submitIt');

// call functions here
//$('input').addEventListener('click', func)

});
