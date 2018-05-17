//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('#typing').on('keydown', function(k){
    if (k.which == 71){
      alert('G was pressed');
    }
  });
}

function submitIt(){
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
    return;
    
  
  })
}
$(document).ready(function(){
  
// call functions here

});
