//define functions here
function getIt(){
  $('p').on('click', function(event){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    //add .tasty to img
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which === 71){
      alert('g has been pressed!')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
