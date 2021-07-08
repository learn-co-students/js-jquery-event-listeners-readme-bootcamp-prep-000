//define functions here

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').attr('class', 'tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    //alert(e.which)
    if(e.which === 71) alert("'g' was pressed");
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}
