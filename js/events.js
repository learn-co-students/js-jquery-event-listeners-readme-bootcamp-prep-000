//define functions here

function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
    return;
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
    return;
  });
}

function pressIt() {
  $('#typing').on('keydown', function(e){
    if (e.key === 'G' || e.key === 'g') {
      alert('You pressed G.');
      return;
    }
  });
}

function submitIt() {
  $('input:last').on('click', function(){
    alert("Your form is going to be submitted now.");
    return;
  });
}

// call functions here

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
