//define functions here


function getIt(){
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt(){
  console.log('call')
  $('img').on('load', function(){
    $(this).addClass("tasty");

  });
}

function pressIt(){
  $('input').on('keydown', function(e){
    if (e.location === 71){
      alert ('pressed g!');
    }
  })
}

function submitIt(){

  $('form').on('submit',function(){
    alert ('Your form is going to be submitted now.');
  })

}

/*

Define a function submitIt that does not accept a parameter.
 The function should bind a submit event to the form
 that alerts "Your form is going to be submitted now.".


*/


$(document).ready(function(){

// call functions here

getIt();
frameIt();
pressIt();
submitIt();



});
