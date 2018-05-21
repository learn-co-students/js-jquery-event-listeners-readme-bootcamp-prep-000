function getIt() {
  $('p').click(alert('Hey!'));
}

function frameIt() {
  $('img').on('load', function() { 
    $('img').addClass('tasty');
  });
}

function submitIt() {
  $('form').submit(alert("Your form is going to be submitted now."));
}

function pressIt() {
  $('input').on('keydown', (key) => {
    if(key.which === 71) {
      alert("You clicked G");
    }
  });
}

$(document).ready(function(){

// call functions here

});
