//define functions here
function getIt() {
  $('p').on('click', function () {
    alert('Hey!');
  });
}
function frameIt() {
  $('img').on('load', function () {
    $('img').append("class='tasty'");
  });
}
function pressIt() {
  $('#typing').on('keydown', function () {
    if (input.which === 'G') {
      alert('You entered a G!');
    }
  });
}
function submitIt() {
  $('form').on('submit', function () {
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
