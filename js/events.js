//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    if(key === 71) alert('You have pressed g button!');
  });
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
