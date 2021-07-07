//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $(document).on('click',function() {
    alert('Hey!')
})}
function frameIt(){
  $('img').on('load',function(){
   $('img').addClass('tasty')
  });
}
function pressIt(){
  $(document).on('keydown',function(key){
    if(key.which==71){
    alert('G key was pressed');
    }
  })
}
function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.');
    return;
  })
}