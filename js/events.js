//define functions here

$(document).ready(function(){

  // call functions here
  
  getIt = function(){
    $('p').on('click',function(){
      alert('Hey!')
    })  
  }

  frameIt = function(){
    $('img').on('load',function(){
       $(this).addClass('tasty');
    })
  }

  pressIt = function(){
    $('input').on('keydown',function(e){
      if(e.which === 71){ alert('You Pressed G') }
    }) 
  }

  submitIt = function(){
    $('form').on('submit',function(){
      alert('Your form is going to be submitted now.');
    })
  }
  
});
