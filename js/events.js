//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img:last').on('load', function() {
    $('img:last').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('form input:first-child').on('keydown', function(key) {
    var key = parseInt(key.which)
    if(key === 71) {
      alert("You pressed it!")
    }
  })
}

$(document).ready(function(){
// call functions here

});
