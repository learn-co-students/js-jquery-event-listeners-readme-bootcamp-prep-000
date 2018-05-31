function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').attr('class','tasty');
}

function pressIt() {
  $('#typing').on('keydown',function(key){
    if (key.which == 71) {
      alert("You've pressed 'G'.");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  });
}














$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});
