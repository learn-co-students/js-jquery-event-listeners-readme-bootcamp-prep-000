function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(){
    $(this).addClass('tasty');
    $(this).css('border', "1px solid red");
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key){
    if (key.which == 71)
    alert('You hit g');
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
