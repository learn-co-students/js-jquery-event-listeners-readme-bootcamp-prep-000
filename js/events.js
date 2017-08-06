//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
subitIt();

});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').load(function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(e){
    if (parseInt(e.which || e.detail) === 71) {
      alert("You have pressed the 'G' key!");
    }
  });
}

function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.");
  });
}
