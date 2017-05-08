//define functions here

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass('tasty')
  })
}

function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!')
  })
}

function pressIt() {
  $(document).on('keydown', function(e) {
    let key = parseInt(e.which || e.detail)
    if (key === 71) {
      alert('You have pressed \'G\'.')
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

  // call functions here

});
