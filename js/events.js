//define functions here
function getIt() {
  $('p').on('click', function () {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on("keydown", function(press) {
    if (press.which === 71) { // G = 71
      alert('G was pressed.');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
    return;
  });
  alert('You entered the wrong value.');
  return;
}

$(document).ready(function(){

// call functions here

});
