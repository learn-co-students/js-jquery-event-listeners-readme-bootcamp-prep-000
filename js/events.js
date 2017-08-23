//define functions here
function frameIt(){
  var temp=$('img')
  $(temp).on('load', function(){
    temp.toggleClass('tasty')
  })
}
frameIt();
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}
function pressIt(){
  $('#typing').on('keydown',function(key){
    if(key.which===71){
    alert('G is pressed!')
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
frameIt();
getIt();
pressIt();
//submitIt();
});
