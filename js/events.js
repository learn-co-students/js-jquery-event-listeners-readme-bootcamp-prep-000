function getIt() {
  $('p').on('click', function(click) {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71) {
      alert('You pressed the letter G!');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
      alert('Your form is going to be submitted now.');
      return;
  });
}
//define functions here

$(document).ready(function(){

return getIt();

return frameIt();

return pressIt();

return submitIt();
// call functions here

});
