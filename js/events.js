//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which === 71) {
      alert ('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}

function frameIt() {
  $('img').on('load', function () {
    $(this).addClass('tasty');
  });
  
}

$(document).ready(function(){

// call functions here
getIt();

pressIt();

submitIt();

frameIt();

});

