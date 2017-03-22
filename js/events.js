//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $(document).on('keydown', function (event) {
    const key = Number.parseInt(event.which || event.detail)
    if (key === 71) {
      alert('G HAS BEEN PRESSED')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function() {
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
