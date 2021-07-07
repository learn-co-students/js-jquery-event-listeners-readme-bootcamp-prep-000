//define functions here

$(document).ready(function(){

// call functions here

});


function getIt(){
  $('p').on('click',function(){
    alert('Hey!')
  })
}


function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty')
  })
}


function pressIt(){
  $('form input:first-child').on('keydown',function(e){
    if (e.which == 71){
      alert('G was pressed');
    }
  });
}


function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.')
  });
}


