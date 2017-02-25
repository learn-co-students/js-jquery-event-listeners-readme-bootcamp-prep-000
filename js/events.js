//define functions here
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

$(document).ready(function(){

// call functions here
getIt;
});
