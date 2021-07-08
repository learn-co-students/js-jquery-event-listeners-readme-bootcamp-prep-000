//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("HEY!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
    $(this).css('border', "solid 100px red")
  })
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == 71) {
      alert("Correct")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
