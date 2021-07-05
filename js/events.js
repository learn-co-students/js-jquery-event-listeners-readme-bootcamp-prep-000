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
  $('input').on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
    }
  });
}
function submitit() {
  $('form').on('sumbit', function(){
    alert('Your form is going to be submitted now.');
  })
}
$(document).ready(function(){

// call functions here
getIt();

framIt();

pressIt();

submitIt();
});