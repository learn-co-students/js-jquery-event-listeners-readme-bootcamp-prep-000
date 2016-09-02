function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which === 71) alert('What up g?')
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
