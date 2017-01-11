//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $(document).on('load', function() {
    $('img').addClass("tasty");
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which == 71) {
      alert('You pressed the g key!');
    }
  })
}



$(document).ready(function() {

// call functions here
getIt();
frameIt();
submitIt();
pressIt();

});
