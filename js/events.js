function getIt() {
  $('p').on('click', function(e) { alert('Hey!') })
}

function frameIt() {
  $('img').on('load', function(e) { $(e.target).addClass('tasty') })
}

function pressIt() {
  $('form input').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You've pressed the G key.")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) { alert("Your form is going to be submitted now.") })
}


$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});
