function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}
function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  });
}
function pressIt() { 
  $('G').on('keydown', function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}

$(document).ready(function(){

// call functions here
getIt();

framIt();

pressIt();

submitIt();
});