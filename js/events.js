//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){  this.className='tasty'; })
}

function pressIt(){
  $('input').on('keydown',function(e){
    if(e.which===71) alert('HEY DONT')
  })
}

function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.')
    return
  })
}
$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
