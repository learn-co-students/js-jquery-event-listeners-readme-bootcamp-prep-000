//define functions here
function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(e){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form').on('keydown', function(e){
    if(e.which===71) {
      alert('You have pressed G key')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
