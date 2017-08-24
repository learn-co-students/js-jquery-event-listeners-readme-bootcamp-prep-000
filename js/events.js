//define functions here

function getIt() {
  $('p').click(function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load',function() {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown',function(press) {
    if (press.which === 71) {
      alert('You pressed G');
    }
  });
}

function submitIt() {
  $('form').on('submit',function() {
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){
});
