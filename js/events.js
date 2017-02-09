//define functions here
function getIt() {
  $('p').on('click', function () { alert('Hey!') } )
};

function pressIt() {
  $('#typing').on('keydown', function(e) {
    key = parseInt(e.which || e.detail)
    if(key === 71) {
      alert('g is pressed')
    }
  });
};

function frameIt() {
  $('img').addClass('tasty')
};

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  });
};

$(document).ready(function(){
// call functions here
  getIt();
  pressIt();
  frameIt();
  submitIt();
});
