//define functions here
function getIt() {
  $('p').on('click', function(event) {
  alert('Hey!')
})
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which === 71) {
    return alert('g was pressed')
  }
})
}

function submitIt() {
  $('form').on('submit', function () {
    alert('Your form is going to be submitted now.');
   return;
 })
}

$(document).ready(function(){

// call functions here

});
