// //define functions here
var getIt = function(){
  alert('hey');
}

var frameIt = function(){
  $('img').addClass('tasty');
}

var submitIt = function(){
  alert('Your form is going to be submitted now.');
}

var pressIt = function(key){
  if(key.which === 71) {
    alert('g was pressed');
  }
}

$(document).ready(function(){

// call functions here
  $('p').click(getIt);
  $('img').on('load', frameIt);
  $(':submit').submit(submitIt);
  $('#typing').on('keydown', pressIt);
});
