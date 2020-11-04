//define functions here

$(document).ready(function(){

// call functions here
  $('p').on('click', getIt);
  
  $('img').on('load', frameIt);
  
  $('#typing').on('keydown', pressIt);
  
  $('form').on('submit', submitIt);
});


function getIt() {
  alert('Hey!');
  
}

function frameIt() {
  $('img').addClass('tasty');
}


function submitIt() {
  alert('Your form is going to be submitted now.');
}

function pressIt() {
  $("#typing").on('keydown', function(key) {
    if (key.which === 71) {
      alert('G was pressed');
    }
  });
  
  }