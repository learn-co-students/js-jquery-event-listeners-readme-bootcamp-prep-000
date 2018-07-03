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
    alert("Hey!");
  });
}

function frameIt() {
  $('body img').on('load', function() {
    $("body img").addClass("tasty");
    console.log('Trying to add the class tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    console.log(`Key pressed = ${key.which}`)
    if(key.which == 71) {
      alert('You have pressed the G key!!');
    }
  });
}

function submitIt() {
  $('form').on('submit', function () {
    alert('Your form is going to be submitted now.');
    console.log('Submitting form');
    return;
  })
}
