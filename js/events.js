//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
};

function frameIt() {
  $('img').on('load', function() {
  return $(this).addClass('tasty');
  })
}

function pressIt() {
  $('form #typing').on('keydown', function(key) {
    if (key.which == 71) {
      alert(`You have pressed the g key!`);
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
    return;
  })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();
pressIt();
submitIt();
});
