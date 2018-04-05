//define functions here
function getIt() {
 $('p').on('click', function(e) {
  alert("Hey!")
 })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71) {
      alert('g was pressed')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    if ($('#typing')) {
    alert('Your form is going to be submitted now.')
    return
    }
  })
}

$(document).ready(function(){
// call functions here
 $(getIt())
 $(frameIt())
 $(pressIt())
 $(submitIt())
})
