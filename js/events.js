//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
    return
  })
  return
}

function frameIt() {
  $(document).on('load', function(){
    $('img').addClass('tasty')
  })
  return
}

function pressIt() {
  $('form').on('keydown', function(key){
    if (key.which === 71) {
      alert('g has been pressed')
    }
    return
  })
  return
}

function submitIt() {
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.')
    return
  })
  return
}

$(document).ready(function(){
  pressIt()
  submitIt()
  frameIt()
  getIt()
// call functions here

});
