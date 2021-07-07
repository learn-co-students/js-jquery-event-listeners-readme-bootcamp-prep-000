function getIt () {
  $('p').on('click', alert("Hey!"));
}

function frameIt () {
  $('img').addClass("tasty");
  $('#tasty').on('load').css('border', 'solid red');
}

function pressIt () {
  $('form input').on('keydown', function G (key) {
      if (key.which === 71) {
      alert("You have pressed the G key!");
      } 
                                })
}

function submitIt () {
  $('form').on('submit', alert("Your form is going to be submitted now."));
}
   


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
