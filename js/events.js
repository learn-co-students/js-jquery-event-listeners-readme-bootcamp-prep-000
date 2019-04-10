//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
 return $('img').on('load', function() {
   $('img').addClass('tasty');
 }); 
}

function pressIt() {
  return $('input').on('keydown', function(e) {
    if(e.which === 71) {
    alert('G Was Pressed');
   }
  });
}

function submitIt() {
  return $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}


$(document).ready(function(){
// call functions here
alert(frameIt);
});
