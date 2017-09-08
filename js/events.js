//define functions here

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
    return;
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
    return;
  })
}

function pressIt() {
  $('input').on('keydown', function (e) {
    if (e.which === 71) {
      alert("You pressed G!")
    }
    return;
  })
}

function submitIt() {
  $('form').on('submit', function () {
    alert("Your form is going to be submitted now.")
    return;
  })
}
