//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt() {
  $('p').click(function() { alert('Hey!');});
}

function frameIt() {
  $('img').on('load', function() { $('img').addClass('tasty');});
}

function pressIt() {
  $('input').keydown(function(e) {
    const key = parseInt(e.detail || e.which);
    console.warn(`got key: ${key}`);
    if(key === 71) { alert("You just pressed the 'g' key.");}
  });
}

function submitIt() {
  $('form').submit(function() {
    alert('Your form is going to be submitted now.');
  });
}
