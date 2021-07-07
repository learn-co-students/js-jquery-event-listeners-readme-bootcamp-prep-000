//define functions here

function getIt() {
  $('p').on('click', alert('Hey!'))
}

function frameIt() {
  $('img').on('load', function tasty() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function pressG(key){
    if (key.which === 71) {
      alert('You pressed G!')
    }
  })
}

function submitIt() {
  $('form input:last').on('submit', alert('Your form is going to be submitted now.'))
}

$(document).ready(function(){

// call functions here

getIt()

frameIt()

pressIt()

submitIt()

});
