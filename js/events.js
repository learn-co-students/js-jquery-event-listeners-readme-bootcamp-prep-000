function getIt() {
  $('p').on('click', ()=> {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('input[type=text]').on('keydown', (e)=> {
    if (e.which ==  71) {
      alert('The g key has been pressed.');
    }
  });
}

function submitIt() {
  $('form').on('submit', ()=> {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
