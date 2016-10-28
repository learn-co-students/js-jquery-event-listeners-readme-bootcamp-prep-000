//define functions here
function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!')
  })
}

function frameIt() {
  $(document).on('load', function(){
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e){
    if(e.which === 71){
      alert('alert')
    }
  })
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  submit()
  //pressIt()
});
