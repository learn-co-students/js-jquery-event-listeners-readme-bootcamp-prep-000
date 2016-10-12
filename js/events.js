//define functions here
var getIt = function() {
    alert('Hey!')

}


function frameIt() {

      $('img').attr('class', 'tasty');

}



  function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which  === 71) {
      alert("You pressed 'g'!")
    }

  })
}


var submitIt = function() {
  alert('Your form is going to be submitted now.')
}




$(document).ready(function(){

pressIt();

  $('p').on('click', getIt);

$('img').on('load', frameIt);


$('form').submit('submitIt');

// call functions here
//$('input').addEventListener('click', func)

});
