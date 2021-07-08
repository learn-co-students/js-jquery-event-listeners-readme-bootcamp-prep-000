//define functions here
function getIt(){
  return $('p').on('click', function(){
    alert('Hey!')
  })
};

function frameIt(){
  return $('img').on('load', function(){
    $('img').addClass('tasty')
  });
};

function pressIt(){
  return $('input').on('keydown', function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
};

function submitIt() {
$('form').on("submit", function() {
    //if($("input:first").val() === "correct"){
      return alert('Your form is going to be submitted now.');
    //}
  });
};




$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
