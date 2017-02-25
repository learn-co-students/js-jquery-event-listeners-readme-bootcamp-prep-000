//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('this').addClass('tasty')
  });
  return;
}

function pressIt() {
  $('document').on('keydown', function() {
    if(e.which === 71) {
      alert('g key was pressed.')
    })
  });
  return;
}

function submitIt() {
  $('form').on("submit", function() {
    alert('Your form is going to be submitted now.')
  })
}
