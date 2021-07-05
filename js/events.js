//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();

});
function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
  })
}
function frameIt(){
  $(document).on('load',function(){
    $('img').addClass('tasty')
  })
}
function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.');
  })
}
function pressIt(){
  $('#typing').on('keydown',function(key){
    if(key.which =='G'.charCodeAt(0)){
        alert('g was pressed');
    }
  })
}
