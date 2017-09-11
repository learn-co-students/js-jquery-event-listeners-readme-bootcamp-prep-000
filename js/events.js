function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function(){
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if(e.which == 71) {
      alert("'g' was pressed!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
      alert("Your form is going to be submitted now.");
    }
  )}

$(document).ready(function(){

});
